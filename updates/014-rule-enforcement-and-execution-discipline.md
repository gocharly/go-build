# Обновление стандарта GO-BUILD: v1.14.0 — Rule Enforcement & Execution Discipline

**Дата**: 2026-09-09  
**Версия**: v1.14.0  
**Приоритет**: CRITICAL  
**Статус**: Активен  

---

## 1. Причина обновления

Анализ практического поведения агентов показал критическую проблему: агент часто пропускает существующие правила стандарта и приступает к выполнению действий (создание файлов, редактирование кода, запуск команд) **до того, как проверит, какие правила применимы к конкретному действию**. Декларативные запреты («не делай этого») читались в конце процесса, когда лишний код уже был сгенерирован.

Кроме того, существовало скрытое противоречие между требованием «минимальности хирургических изменений» и жестким требованием «для каждой задачи привлекать от 4 до 10 субагентов и составлять 16-блочное ТЗ», что приводило к оверинжинирингу на точечных задачах.

Стандарт v1.14.0 вводит **процедурный механизм принудительного соблюдения правил (Rule Enforcement)**, блокирующий несанкционированные действия ДО их выполнения.

---

## 2. Ключевые архитектурные компоненты v1.14.0

### 1. Иерархия правил (Rule Priority Hierarchy: P0–P3)
Все требования стандарта ранжированы по строгой 4-уровневой шкале. Разрешение любых коллизий происходит строго сверху вниз:
* **P0 — ABSOLUTE (Законы нулевой терпимости)**: Исключения запрещены. Нарушение = немедленный STOP. (Scope Lock, Anti-AI-Slop & Zero-Emoji, No Command Dumps, Data Safety, Violation Stop Law).
* **P1 — MANDATORY (Обязательные инженерные протоколы)**: Обязательны для всех профильных действий. (Pre-Action Gate, Search Before Create, Surgical Changes, Clean Up Only Your Own Mess, Step → Verify, Window-First Adaptivity, Border Last, Concise Communication).
* **P2 — CONDITIONAL (Условные контекстные триггеры)**: Активируются строго при наступлении триггера. (16 блоков ТЗ и 4–10 субагентов — только для FULL_PROJECT / MAJOR_FEATURE; Web-to-Desktop аудит; Libraries.dev аудит; Design Memory фиксация).
* **P3 — GUIDANCE (Рекомендации и эвристики)**: Выбор фреймворков, эвристики чистоты («200 строк в 50»).

### 2. Scope Lock и Strict Technical Necessity
Перед выполнением задачи агент обязан зафиксировать границы вмешательства:
* **`[REQUESTED]`**: Что запрошено пользователем (единственная цель задачи).
* **`[PROTECTED]`**: Файлы, модули, чужой legacy-код и стили, которые нельзя модифицировать попутно.
* **`[REQUIRED]`**: Минимально необходимые технические шаги (компиляция, типы, обязательный импорт). Защита от Scope Leakage: категорически запрещено оправдывать добавление диалогов, тостов, лоадеров, бейджей или логов через «техническую необходимость».
* **`[FORBIDDEN]`**: Что категорически запрещено (новые не прошенные поля, бейджи, кнопки, зависимости, Drive-by Refactoring).

### 3. Pre-Action Gate и Anti-Slop Core 6
Перед вызовом любого инструмента, изменяющего файлы кодовой базы (`write_to_file`, `replace_file_content`, мутирующий `run_command`), агент обязан пройти 5 бинарных проверок:
1. **Scope Check**: Входит ли действие строго в `[REQUESTED]` / `[REQUIRED]`?
2. **Search Check**: Проверен ли проект на наличие существующего решения (Search Before Create)?
3. **Anti-Slop Core 6**: Пройден экспресс-фильтр 6 запретов визуального мусора: Zero-Emoji, No Corner Dots, No Header Badges/Pills, No Fake Context/Buzzwords, Border Last Principle, Status Must Have Consequences.
4. **Simplicity Test**: Это минимально достаточное решение без одноразовых абстракций (Senior Simplicity)?
5. **Verify Ready**: Определен ли точный способ проверки результата (`Step → Verify`)?
*Если хотя бы на один вопрос ответ «НЕТ» — действие БЛОКИРУЕТСЯ.*

### 4. Rule Trigger Map и Pre-Response Gate
Автоматическая привязка намерения агента к набору правил:
* `replace_file_content` → P0 Scope Lock, P1 Surgical Changes, P1 Anti-Style-Drift, P1 Clean up only your own mess, P0 Data Safety.
* `write_to_file` → P1 Search Before Create, P0 Scope Lock, P1 Modularity, P1 Visual Purpose Gate.
* `UI / Layout / Styling` → P0 Anti-AI-Slop & Zero-Emoji, P0 Radical Header Minimalism & No Badges, P1 Window-First Adaptivity, P1 Border Last.
* `Зависимости` → P0 Scope Lock, P1 Проверка stdlib/проекта, P2 Libraries.dev аудит.
* `run_command` → P0 Autonomous Execution (No Command Dumps), P1 Step → Verify.
* **Pre-Response Gate** (Шлюз ответа пользователю): 4 бинарных фильтра перед отправкой сообщения: Zero Command Dumps (P0-3), Zero Log Dumps (P1-8), Strict Russian Language & Brevity (P1-8), Verified Status.

### 5. Violation Protocol и Circuit Breaker
При обнаружении любого отклонения агент немедленно выполняет протокол:
`STOP → IDENTIFY → REVERT/ISOLATE → REPLAN → FIX → VERIFY → PROCEED`.
* **Circuit Breaker**: Лимит 2 попытки исправления. При повторной неудаче — FULL STOP, чистый откат и запрос решения у пользователя во избежание бесконечного цикла правок.

### 6. Continuous Compliance Check (Непрерывный пошаговый аудит)
Микро-аудит diff после каждого шага. Переход к следующему действию разрешен только при чистом результате.

### 7. Оцифрованная матрица Task Sizing
Масштабирование тяжести процессов строго под оцифрованный класс задачи:
* `SURGICAL_TASK` (1–2 файла, diff ≤ 50 строк): экспресс Scope Lock, 1 ведущий агент, Pre-Action Gate. Создание 16 блоков ТЗ и запуск субагентов строго запрещены.
* `MAJOR_FEATURE` (3–8 файлов, 1 новый экран/модуль): экспресс-анализ архитектуры, 2–4 профильных субагента.
* `FULL_PROJECT` (> 8 файлов, с нуля): полный 16-блочный анализ, 4–10 субагентов, фазовый QA.

---

## 3. Измененные файлы

1. `references/rule-enforcement-and-execution-discipline.md`:
   - Создан полный нормативный справочник по процедуре исполнения и принуждения к соблюдению правил стандарта.
2. `SKILL.md`:
   - В операционные правила внедрены Scope Lock, Pre-Action Gate и иерархия P0–P3.
   - Раздел 7 расширен архитектурными подразделами 7.1–7.7; правила 9–17 размечены приоритетами P0/P1.
   - Раздел 13 дополнен условием P2-1 Conditional для субагентов (устранено противоречие с минимальностью).
   - Чек-лист Раздела 16 дополнен блоком проверок Rule Enforcement & Continuous Compliance.
   - Версия стандарта поднята до `v1.14.0`.
3. `README.md`:
   - Актуализирована версия v1.14.0 и описание архитектурных столпов.
4. `CHANGELOG.md`:
   - Внесена запись релиза v1.14.0 с чеклистом Study / Review.

---

## 4. Study / Review
**Priority**: CRITICAL
- [x] Создать `references/rule-enforcement-and-execution-discipline.md`
- [x] Обновить `SKILL.md` (frontmatter, операционные правила, разделы 7, 13, 16, 20)
- [x] Обновить `README.md` и `CHANGELOG.md`
- [ ] Фиксировать Scope Lock перед началом каждой новой задачи
- [ ] Выполнять проверку по Pre-Action Gate перед вызовом мутирующих инструментов
- [ ] Применять Violation Protocol при первых признаках выхода за скоуп
