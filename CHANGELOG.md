# GO-BUILD Changelog

Все значимые изменения стандарта GO-BUILD фиксируются в этом документе и детализируются отдельными update-файлами в папке `updates/`.

## v1.19.0 — Rail Pipeline & Engineering Reward Engine
**Дата**: 2026-09-11  
**Приоритет**: CRITICAL  
**Update Log**: [`updates/021-rail-pipeline-and-reward-engine.md`](./updates/021-rail-pipeline-and-reward-engine.md)

### Добавлено и интегрировано:
* **6-фазный рельсовый конвейер (State Machine)**:
  - Процесс разработки перестроен в последовательный конвейер: Scope Lock & Sizing → Discovery & Reuse → Architecture & Naming → Surgical Execution → Defensive Verification → Reward Score & Report.
  - Каждая фаза регламентирована бинарными списками: «Что можно и нужно делать» (**DO & ENCOURAGED**) vs «Что не стоит и запрещено» (**DON'T & FORBIDDEN**).
* **Система инженерного вознаграждения (Engineering Reward Engine)**:
  - Оцифрованная модель оценки качества (база 100/100).
  - Бонусы (+10): Surgical Precision, Reuse First, Senior Simplicity, Predictable Naming, Defensive Guard, Clean UI & Border Last.
  - Штрафы (-20..-50): Scope Creep, Style Drift, Abstract Naming, UI Slop & Emoji, Junk Module, Security Breach, Command Dumps.
* **Прогрессная плашка вознаграждения (Раздел 18.4 в `SKILL.md`)**:
  - Агент при завершении задачи рассчитывает и выводит компактную плашку Engineering Reward Score.
* **Нормативный справочник (`references/pipeline-and-reward-engine.md`)**:
  - Детальный регламент фаз, гейтов и формулы скоринга.

### Study / Review:
**Priority**: CRITICAL
- [x] Создать `references/pipeline-and-reward-engine.md`
- [x] Обновить `SKILL.md` (вводная часть, 18.4, 20)
- [x] Синхронизировать `README.md` и `CHANGELOG.md`
- [ ] Двигаться строго по 6 фазам конвейера без перескакивания гейтов
- [ ] Выводить прогрессную плашку Engineering Reward Score при сдаче задачи

---

## v1.18.0 — Architecture, Predictable Naming & Development Workflow
**Дата**: 2026-09-11  
**Приоритет**: HIGH  
**Update Log**: [`updates/020-architecture-naming-and-workflow.md`](./updates/020-architecture-naming-and-workflow.md)

### Добавлено и интегрировано:
* **Нормативный справочник (`references/architecture-naming-and-workflow.md`)**:
  - 24 правила прозрачной архитектуры, изоляции API от внутренней логики и доменной группировки.
  - Строгие стандарты именования: файлы по назначению (`slugify.ts`), функции по выполняемому действию (`calculatePrice`, `createUser`), запрет абстрактных названий (`doSomething`, `process`, `handle`, `helper`).
  - Предсказуемость и единообразие терминологии по всему проекту (`createUser`/`getUser`, а не вперемешку с `makeUser`/`fetchUserData`).
  - Логичное направление зависимостей (`API → Domain → Infrastructure`) и строгий запрет циклов (`A ↔ B`).
  - Запрет папок ради одного файла и микрофайлов ради каждой мелкой функции.
  - Сквозной 24-шаговый алгоритм разработки от понимания задачи до финальной проверки Scope и diff.
* **Чеклист Architecture & Naming Audit в Разделе 16 (`SKILL.md`)**:
  - Внедрен отдельный блок 7 проверки архитектуры и именования перед Final Code Audit.
* **Обновление Раздела 4 (`SKILL.md`)**:
  - Закреплены требования к именованию по действию, предсказуемости имен, направлению зависимостей и запрету папок-однодневок.

### Study / Review:
**Priority**: HIGH
- [x] Создать `references/architecture-naming-and-workflow.md`
- [x] Обновить `SKILL.md` (Разделы 4, 16, 20)
- [x] Синхронизировать `README.md` и `CHANGELOG.md`
- [ ] Называть функции только по действию (`calculatePrice`, `createUser`)
- [ ] Использовать единообразные имена для одинаковых операций
- [ ] Не создавать папки ради одного файла
- [ ] Проверять diff и Scope перед завершением разработки

---

## v1.17.0 — Defensive Architecture & Security Verification
**Дата**: 2026-09-11  
**Приоритет**: CRITICAL  
**Update Log**: [`updates/019-defensive-architecture-and-security-verification.md`](./updates/019-defensive-architecture-and-security-verification.md)

### Добавлено и интегрировано:
* **Справочник защищенной архитектуры (`references/defensive-architecture-and-security.md`)**:
  - Zero-Trust Input Validation: закрытые схемы входных данных (`strict()`, `DisallowUnknownFields()`, `extra='forbid'`).
  - Data Layer Binding (BOLA / IDOR): обязательная фильтрация по `tenant_id` и `user_id` при любых операциях чтения/мутации в БД.
  - Injection & XSS Defense: строгая параметризация запросов, контекстное экранирование вывода.
  - Auth & Session Hardening: запрет алгоритма JWT `none`, обязательные флаги сессионных куки `HttpOnly`, `Secure`, `SameSite`.
  - Supply Chain Gate: защита от Typosquatting (сверка точного имени пакета) и аудит уязвимостей (CVE).
* **Security & Defensive Verification Check в Разделе 16 (`SKILL.md`)**:
  - Внедрен 9-й блок приемочного чек-листа перед сдачей проекта.
* **Модернизация Блока 9 предпроектного анализа (`FULL_PROJECT`)**:
  - Блок переименован в «Слабые места, риски и Threat Model» с фиксацией поверхности атаки (Attack Surface), классификации данных и рисков IDOR.
* **Аудит цепочки поставок (Раздел 5 и `references/resources.md`)**:
  - Дополнен чеклист проверки библиотек на Typosquatting и отсутствие `CRITICAL/HIGH` CVE.

### Study / Review:
**Priority**: CRITICAL
- [x] Создать `references/defensive-architecture-and-security.md`
- [x] Интегрировать проверки в `SKILL.md` (Разделы 5, 16, предпроектный анализ)
- [x] Обновить `templates/analysis-template.md` и `references/resources.md`
- [ ] Всегда использовать закрытые схемы валидации ввода (`strict` / `extra='forbid'` / `DisallowUnknownFields`)
- [ ] Проверять Data Layer Binding (`tenant_id`, `user_id`) на всех операциях с БД
- [ ] Сверять написание внешних пакетов перед установкой (Anti-Typosquatting)
- [ ] Проходить блок Security & Defensive Verification Check перед сдачей кода

---

## v1.16.1 — Калибровка и правила
**Дата**: 2026-09-10  
**Приоритет**: HIGH  
**Update Log**: [`updates/018-calibration-and-rules.md`](./updates/018-calibration-and-rules.md)

### Добавлено и откалибровано:
* **Калибровка модульности и простоты кода**:
  - Порог маленького модуля: логика размером ~30–50 строк или меньше с одним потребителем не выносится автоматически; код остаётся локально.
  - Запрет на искусственные структуры: `utils/` или `helpers/` ради одной функции, `services/` ради одного вызова, интерфейс ради одной реализации, фабрика ради одного объекта, DTO/wrapper ради формальности.
  - Принцип основного файла: последовательный поток процесса (`get data → validate → transform → save → return`) сохраняется рядом; исключены искусственные многослойные цепочки.
  - Уточнение теста старшего инженера и проверки простоты: сокращение алгоритмической логики (120 → 40–50 строк) не должно ломать существующую архитектуру и границы фреймворка.
  - Приоритет применения правил: `P0 Scope / User Request > Existing Project Architecture > Framework Conventions > Simplicity / Modularity > Optional Abstractions`.
* **Калибровка правил верстки и интерфейса**:
  - Subtle Border Fallback: минимальная рамка (`border: 1px solid var(--border-subtle)`) разрешена, если элемент и родитель имеют одинаковый фон и разделение невозможно отступами или цветом.
  - Иерархия средств разделения: spacing → typography → contrast → alignment → background → border/shadow.
  - Безопасность текста во Flex (`min-width: 0`, контекстный перенос/многоточие).
  - Responsive Restructuring: перестроение desktop-структуры в вертикальный стек на мобильных экранах.
  - Приоритет точечных задач: при `SURGICAL_TASK` минимальный diff превалирует над общими правилами рефакторинга.
  - Data-Flow & State Wiring: разрешено подключение существующих props, types, hooks, store без создания спекулятивной инфраструктуры.
* **Чеклисты Final Code Audit и Final UI Audit**:
  - Внедрены структурированные списки проверки кода (10 пунктов) и интерфейса (13 пунктов).
  - Закреплен основной принцип минимизации кода и шума.
* **Стиль формулировок**:
  - Исключены маркетинговые и оценочные слова («Final», «Ultimate», «Production-Ready»).
  - Текст приведен к нейтральному техническому тону.

### Изменено:
* `SKILL.md`: обновлены разделы 4, 6.1, 7.1–7.3, 10, 16, 17, 18, 20; версия повышена до `v1.16.1`.
* `references/universal-modularity-and-code-simplicity.md`: актуализирован в спокойном стиле с калибровкой порога модулей и теста старшего инженера.
* `references/universal-ui-layout-and-visual-discipline.md`: актуализирован с включением subtle border fallback и responsive restructuring.
* `README.md`: обновлена версия и краткое описание.

### Study / Review:
**Priority**: HIGH
- [x] Создать `updates/018-calibration-and-rules.md`
- [x] Обновить `references/universal-modularity-and-code-simplicity.md` и `references/universal-ui-layout-and-visual-discipline.md`
- [x] Внести калибровки в `SKILL.md`
- [x] Синхронизировать `CHANGELOG.md` и `README.md`
- [ ] Оставлять код размером ≤ 30-50 строк локально при единственном потребителе
- [ ] Не разрушать существующую архитектуру проекта ради формального сокращения строк
- [ ] Применять Subtle Border Fallback только при одинаковом фоне элемента и родителя
- [ ] Проверять Final Code Audit и Final UI Audit перед завершением задач

---

## v1.16.0 — Universal UI, Layout & Visual Discipline
**Дата**: 2026-09-10  
**Приоритет**: CRITICAL  
**Update Log**: [`updates/017-universal-ui-layout-and-visual-discipline.md`](./updates/017-universal-ui-layout-and-visual-discipline.md)

### Добавлено:
* **Универсальная визуальная дисциплина (Universal UI & Visual Discipline)**:
  - **Borders Are Not Default Decoration**: обводка запрещена по умолчанию на кнопках, карточках, контейнерах, навигации, секциях, панелях, header/footer и инпутах; иерархия строится через отступы, контраст фона и типографику.
  - **Inputs, Buttons, Navigation & Dividers**: запрет рамок на инпутах и кнопках без прямого запроса; запрет превращения навигации в сетку рамочных ячеек; экономное использование разделителей (`dividers`).
  - **No Decorative UI Slop**: строгий запрет на лишние тени (`shadows`), рамки (`borders`), градиенты, бейджи, фоны, контейнеры, случайные иконки и анимации.
  - **Visual Simplicity Rule**: если два варианта одинаково функциональны, выбирается визуально более простой.
* **Адаптивная целостность верстки (Responsive By Default & Layout Integrity)**:
  - **Responsive By Default**: интерфейс сразу проектируется на 6 диапазонов экранов (Narrow Mobile, Mobile, Tablet, Laptop, Desktop, Wide Desktop); запрет подхода «desktop-first».
  - **No Fixed-Width Fragility**: запрет жестких пиксельных размеров (`width: 1000px`, `height: 700px`); применение `%`, `max-width`, `clamp()`, `flex`, `grid` и флюидных отступов.
  - **Layout Integrity & Content Adaptation**: обязательный контроль 11 факторов целостности (overflow, horizontal scroll, flex shrink, text/button wrapping); адаптация к экстремально длинным текстам и Empty States.
  - **Spacing System & Gap Before Margin**: отступы строго из шкалы; расстояние между дочерними элементами контейнера задаётся через `gap`, а не каскад margins.
  - **No Div-Hell & No Positioning as Layout**: семантическая верстка без бессмысленной вложенности div; запрет `absolute/relative` для построения базовой сетки.
* **Протоколы аудита и Final UI Stress Test**:
  - 12-вопросный **Visual Positioning Audit**, Container Audit, Component Audit, State Visual Audit и Image/Media Audit.
  - **Final UI Stress Test**: сквозная проверка по 5 блокам (Structure, Layout, Visual, Responsive, Interaction) и финальный вопрос проверки простоты.
  - **Accessibility Without Scope Expansion**: проверки a11y применяются строго к изменяемому элементу; P0 Scope Lock имеет абсолютный приоритет над расширением скоупа.
* **Нормативный справочник**: [`references/universal-ui-layout-and-visual-discipline.md`](./references/universal-ui-layout-and-visual-discipline.md).

### Изменено:
* `SKILL.md`:
  - Frontmatter обновлен с указанием Universal UI, Layout & Visual Discipline.
  - Раздел 6.1 кардинально расширен новыми стандартами верстки и визуальной дисциплины.
  - Раздел 8 дополнен запретами на Borders Are Not Default, No Decorative UI Slop, No Fixed-Width Fragility, No Div-Hell.
  - Раздел 16 (Чеклист) дополнен блоком проверок Final UI Stress Test и Visual Positioning Audit.
  - Версия стандарта повышена до `v1.16.0`.
* `README.md`: актуализирована версия v1.16.0 и ключевые архитектурные столпы.

### Study / Review:
**Priority**: CRITICAL
- [x] Создать `references/universal-ui-layout-and-visual-discipline.md`
- [x] Обновить `SKILL.md` (frontmatter, разделы 6.1, 8, 16, 20)
- [x] Синхронизировать `CHANGELOG.md` и `README.md`
- [ ] По умолчанию не добавлять borders на кнопки, карточки, навигацию и поля ввода
- [ ] Использовать Gap Before Margin и исключать Div-Hell
- [ ] Заменять жесткие пиксели адаптивными свойствами (%, max-width, clamp, flex)
- [ ] Проверять UI на 6 диапазонах экранов и длинном контенте
- [ ] Проходить Final UI Stress Test перед завершением UI-задач

---

## v1.15.0 — Universal Modular Architecture & Code Simplicity
**Дата**: 2026-09-09  
**Приоритет**: CRITICAL  
**Update Log**: [`updates/016-universal-modularity-and-code-simplicity.md`](./updates/016-universal-modularity-and-code-simplicity.md)

### Добавлено:
* **Универсальная модульная архитектура (Universal Modularity)**:
  - Группировка кода по доменной ответственности (`auth/`, `payments/`, `users/`, `storage/`) вместо технических типов файлов.
  - Категорический запрет контейнеров-свалок (`utils/`, `helpers/`, `common/`, `misc/`, `functions/`).
  - Нативная система модулей для всех языков: Go (packages, `internal/`), Rust (modules, crates, `pub(crate)`), Python (packages, `__init__.py`), TypeScript/JS (ES modules, feature folders), Java/Kotlin (packages), C# (namespaces, Vertical Slices), C/C++ (headers, modules), Swift (SPM), PHP (namespaces).
* **Принцип основного файла (Main File Principle)**: входные файлы описывают высокоуровневый поток выполнения (Control Flow), а не раздуваются монолитной реализацией на сотни строк.
* **Module Extraction Gate**: 5 обязательных вопросов перед выносом логики в модуль; строгий критерий — код обязан стать проще для понимания.
* **Запрет избыточной фрагментации (Do Not Over-Modularize)**: запрет создания модулей ради строк, эстетики или одноразовой двухстрочной логики; запрет механических лимитов строк («функция ≤ 20 строк»).
* **Senior Simplicity & 7 контрольных вопросов простоты**: протокол упрощения перед финализацией задачи; Anti-Abstraction Rule (запрет спекулятивных абстракций и убер-классов `BaseManager`, `GenericHelper` «на будущее»).
* **Refactoring Safety & God Entity Detection**: выявление God File / God Module; сохранение поведения и верификация каждого шага (`Step → Verify`).
* **Нормативный справочник**: [`references/universal-modularity-and-code-simplicity.md`](./references/universal-modularity-and-code-simplicity.md).

### Изменено:
* `SKILL.md`:
  - Frontmatter обновлен с указанием Universal Modularity & Code Simplicity.
  - Разделы 3 и 4 дополнены языково-агностичной архитектурой и принципом Main File.
  - Раздел 7 (Правило 10) полностью переписан под стандарт Universal Modularity & Code Simplicity.
  - Раздел 7 (Правило 17) дополнен 7 контрольными вопросами простоты и Anti-Abstraction Rule.
  - Раздел 16 дополнен чеклистом модульности и простоты кода.
  - Версия стандарта повышена до `v1.15.0`.
* `README.md`: актуализирована версия v1.15.0 и архитектурные столпы.

### Study / Review:
**Priority**: CRITICAL
- [x] Создать `references/universal-modularity-and-code-simplicity.md`
- [x] Обновить `SKILL.md` (разделы 3, 4, 7 (правила 10 и 17), 16, 20)
- [x] Синхронизировать `CHANGELOG.md` и `README.md`
- [ ] Группировать код по доменной ответственности вместо технического типа
- [ ] Использовать нативные механизмы модульности целевого стека
- [ ] Следовать принципу Main File (описание потока выполнения)
- [ ] Не дробить код искусственно ради формального снижения числа строк
- [ ] Задавать 7 контрольных вопросов простоты перед завершением задачи

---

## v1.14.1 — Enforcement Refinement & Watertight Circuit Breaker
**Дата**: 2026-09-09  
**Приоритет**: CRITICAL  
**Update Log**: [`updates/015-enforcement-refinement-and-circuit-breaker.md`](./updates/015-enforcement-refinement-and-circuit-breaker.md)

### Добавлено:
* **Pre-Action Audit Stamp Contract**: Обязательный штамп аудита (`[PRE-ACTION AUDIT]: Scope: OK | Rules: P0,P1 | Checks: PASS | Decision: PASS`), выводимый в контекст непосредственно перед каждым мутирующим вызовом инструментов кодовой базы.
* **Data-Flow Plumbing в `[REQUIRED]`**: Официальная легализация сквозной передачи данных (пропсы, хуки, стор, типы) как строгой технической необходимости при сохранении спекулятивного UI под запретом `[FORBIDDEN]`.
* **Layout Core 4 в Pre-Action Gate**: Интеграция 4 ключевых правил верстки (Gap Before Margin, Semantic First, No Positioning as Layout, Responsive Integrity) в третий вопрос предварительного шлюза.
* **Watertight Circuit Breaker**: Предохранитель разделен на штатные действия (до 3 микро-исправлений синтаксиса/линтера в файле разрешены) и аварийные триггеры (Scope Drift, Repeated Architectural Failure, Scope Deadlock, Repeated Violation).
* **Mechanical Repetitive Changes**: Шаблонные механические правки (смена импортов, констант, версий с diff ≤ 3–5 строк на файл) классифицируются как `SURGICAL_TASK` независимо от количества файлов.
* **Правила разрешения коллизий**:
  - Для `SURGICAL_TASK` правило P1-3 (Хирургическая точность) имеет строгий приоритет над P1-10 (Модульность).
  - P0 Scope Lock имеет строгий приоритет над общими рекомендациями по чистоте, UI и a11y (Разделы 4 и 6).

### Изменено:
* `SKILL.md`:
  - Полностью ликвидированы все безусловные требования 16-блочного анализа в разделах 2, 3, 17, Протоколе начала разработки и Обязательном формате результата анализа. Все они приведены в строгое соответствие с Task Sizing (`[P2-CONDITIONAL]`).
  - Для `SURGICAL_TASK` внедрен фаст-трек и прямой категорический запрет на 16 блоков ТЗ и запуск субагентов.
  - Внедрен Pre-Action Audit Stamp, уточнен Circuit Breaker и Task Sizing.
  - Разделы 4 и 6 дополнены указанием на приоритет Scope Lock над общими рекомендациями.
  - Версия повышена до `v1.14.1`.
* `references/rule-enforcement-and-execution-discipline.md`: синхронизированы все 8 исправлений аудита.
* `README.md`: версия стандарта повышена до `v1.14.1`.

### Study / Review:
**Priority**: CRITICAL
- [x] Внедрить Pre-Action Audit Stamp перед каждым мутирующим вызовом инструментов
- [x] Устранить коллизию Task Sizing для механических многофайловых правок
- [x] Исключить ложные срабатывания Circuit Breaker на микро-правках линтера
- [x] Убрать безусловные требования 16 блоков из всех разделов стандарта
- [ ] Контролировать соблюдение фаст-трека для `SURGICAL_TASK`

---

## v1.14.0 — Rule Enforcement & Execution Discipline
**Дата**: 2026-09-09  
**Приоритет**: CRITICAL  
**Update Log**: [`updates/014-rule-enforcement-and-execution-discipline.md`](./updates/014-rule-enforcement-and-execution-discipline.md)

### Добавлено:
* **Процедурный механизм принудительного соблюдения правил (Rule Enforcement & Execution Discipline)**:
  * **Иерархия правил (P0–P3)**: P0 Absolute (законы нулевой терпимости: Scope Lock, Anti-AI-Slop, No Command Dumps, Data Safety, Violation Stop), P1 Mandatory (Pre-Action Gate, Search Before Create, Surgical Changes, Clean up only your own mess, Step → Verify), P2 Conditional (16 блоков ТЗ, 4–10 субагентов, Web-to-Desktop аудит, Libraries.dev), P3 Guidance (эвристики и архитектурные паттерны).
  * **Scope Lock & Strict Technical Necessity**: процедурный замок границ задачи (`[REQUESTED]`, `[PROTECTED]`, `[REQUIRED]`, `[FORBIDDEN]`) с жестким запретом маскировать спекулятивный UI (диалоги, тосты, лоадеры) под «техническую необходимость».
  * **Pre-Action Gate & Anti-Slop Core 6**: 5 бинарных проверок перед ЛЮБЫМ мутирующим вызовом инструментов (Scope, Search, Anti-Slop Core 6, Simplicity, Verify) со встроенным экспресс-фильтром (Zero-Emoji, No Corner Dots, No Header Badges/Pills, No Fake Context/Buzzwords, Border Last, Status Consequences). Блокировка действия при ответе «НЕТ».
  * **Rule Trigger Map & Pre-Response Gate**: автоматическая матрица триггеров и 4 бинарных фильтра ответа пользователю (Zero Command Dumps, Zero Log Dumps, Strict Russian Language & Brevity, Verified Status).
  * **Violation Protocol & Circuit Breaker**: регламент немедленной реакции (`STOP → IDENTIFY → REVERT → REPLAN → FIX → VERIFY → PROCEED`) с предохранителем на 2 попытки (Circuit Breaker) для предотвращения бесконечного цикла правок.
  * **Continuous Compliance Check**: непрерывный Micro-Audit diff после каждого шага.
  * **Оцифрованная матрица Task Sizing**: четкие пороги сложности (`SURGICAL_TASK`: 1–2 файла, diff ≤ 50 строк; `MAJOR_FEATURE`: 3–8 файлов; `FULL_PROJECT`: > 8 файлов) для предотвращения оверинжиниринга.
* **Нормативный справочник**: [`references/rule-enforcement-and-execution-discipline.md`](./references/rule-enforcement-and-execution-discipline.md).
* **Блок валидации Rule Enforcement**: чек-лист Раздела 16 дополнен проверками прохождения Scope Lock, Pre-Action Gate, Rule Trigger Map, Violation Protocol и Continuous Compliance Check.

### Изменено:
* `SKILL.md`:
  * В frontmatter и ключевые операционные правила добавлены Scope Lock, Pre-Action Gate и иерархия P0–P3.
  * Раздел 7 трансформирован в систему принудительного исполнения правил с подразделами 7.1–7.7; правила 9–17 размечены приоритетами P0/P1.
  * Раздел 13 получил условие P2-1 Conditional с запретом запуска лишних субагентов на точечных задачах.
  * Чек-лист Раздела 16 обновлен; версия стандарта повышена до `v1.14.0`.
* `README.md`: актуализирована версия v1.14.0 и описание архитектурных столпов.

### Study / Review:
**Priority**: CRITICAL
- [x] Создать `references/rule-enforcement-and-execution-discipline.md`
- [x] Интегрировать Scope Lock, Pre-Action Gate и иерархию P0–P3 в `SKILL.md`
- [x] Обновить `README.md` и `CHANGELOG.md`
- [ ] Фиксировать Scope Lock перед началом каждой задачи
- [ ] Проверять Pre-Action Gate перед вызовом мутирующих инструментов
- [ ] Следовать Violation Protocol при любых сбоях или отклонениях

---

## v1.13.0 — Guidelines Integration: Surgical Precision & Engineering Simplicity
**Дата**: 2026-09-09  
**Приоритет**: CRITICAL  
**Update Log**: [`updates/013-engineering-discipline.md`](./updates/013-engineering-discipline.md)

### Добавлено:
* **Правило «17. Инженерная простота, проверка шагов и конструктивное возражение» (Раздел 7 в SKILL.md)**:
  * **Конструктивное возражение (Push back when warranted)**: открыто предлагать более простой путь при оверинжиниринге; показывать компромиссы (tradeoffs); задавать вопросы при неоднозначности вместо скрытых догадок.
  * **Тест старшего инженера (Senior Engineer Simplicity Test)**: запрет спекулятивной гибкости и одноразовых абстракций; правило «200 строк в 50».
  * **Пошаговая верификация (Step → Verify)**: привязка явного критерия проверки к каждому шагу плана.
* **Блок валидации инженерной простоты**: чек-лист Раздела 16 дополнен проверками Anti-Style-Drift, Senior Engineer Test, защитой legacy-кода и Step → Verify.
* **Глобальная синхронизация**: правило 17 добавлено в `GEMINI.md`, `~/.gemini/GEMINI.md` и `.agents/AGENTS.md`.

### Изменено:
* `SKILL.md`:
  * Обновлено правило 11 («Очистка кода»): закреплен принцип «Clean up only your own mess» — запрещено самовольно удалять чужой legacy-код.
  * Обновлено правило 13 («Принцип минимального изменения»): внедрен строгий запрет попутного рефакторинга и смены стиля (Anti-Style-Drift); тест diff (каждая строка прямо следует из запроса).
  * Внедрено правило 17; версия повышена до `v1.13.0`.
* `DESIGN_MEMORY.md`: в Avoid Rules добавлены правила `Avoid: Drive-by Refactoring & Style Drift` и `Avoid: Deleting Unrelated Legacy Code`.
* `templates/subagent-team-blueprint.md`: в фундаментальные стандарты и роли `System Architect`, `Frontend Engineer`, `Backend Engineer`, `Code Reviewer` интегрированы требования инженерной простоты.
* `README.md`: актуализирована версия v1.13.0 и список правил.

### Study / Review:
**Priority**: CRITICAL
- [x] Интегрировать правила 11, 13, 17 в `SKILL.md`, `GEMINI.md`, `AGENTS.md`
- [x] Обновить `DESIGN_MEMORY.md`, `subagent-team-blueprint.md` и `README.md`
- [ ] Контролировать diff перед коммитом на прямое соответствие запросу (без Style Drift)
- [ ] Проверять наличие условий `verify` во всех пошаговых планах

---

## v1.12.0 — Concise and Clear Communication Discipline
**Дата**: 2026-09-09  
**Приоритет**: CRITICAL  
**Update Log**: [`updates/012-concise-and-clear-communication.md`](./updates/012-concise-and-clear-communication.md)

### Добавлено:
* **Правило «16. Краткая и понятная коммуникация» (Раздел 7 в SKILL.md)**:
  * Запрет засорения чата лишним текстом, раздутыми объяснениями и повторением очевидного контекста.
  * Запрет пошагового протоколирования каждого автономного технического действия и сброса промежуточных логов/проверок.
  * Вывод только важного результата, проблемы или требуемого действия.
  * Простой понятный язык без лишнего технического жаргона; исключение ритуальных приветствий, формальностей и пустых заключений.
  * Фундаментальный принцип: *«Меньше текста — больше полезной информации.»*
* **Подраздел 18.3 в SKILL.md**: регламентирована дисциплина сообщений.
* **Блок валидации коммуникации**: в чек-лист `Agent Behavioral & Scope Check` включена проверка краткости и ясности ответа без «воды».
* **Глобальная синхронизация**: правило 16 добавлено в `GEMINI.md` и `.agents/AGENTS.md`.

### Изменено:
* `SKILL.md`: внедрено правило 16 в Раздел 7; обновлен чек-лист Раздела 16; добавлен подраздел 18.3; версия стандарта повышена до `v1.12.0`.
* `templates/subagent-team-blueprint.md`: фундаментальные стандарты и инструкция `Code Reviewer` дополнены требованием краткой и понятной коммуникации.

### Study / Review:
**Priority**: CRITICAL
- [x] Интегрировать правило 16 в `SKILL.md`, `GEMINI.md` и `AGENTS.md`
- [x] Обновить регламент работы команды в `subagent-team-blueprint.md`
- [ ] Контролировать лаконичность ответов перед каждой отправкой сообщения

---

## v1.11.0 — Search Before Create Discipline & Reuse First
**Дата**: 2026-09-09  
**Приоритет**: CRITICAL  
**Update Log**: [`updates/011-search-before-create-discipline.md`](./updates/011-search-before-create-discipline.md)

### Добавлено:
* **Правило «15. Сначала искать, потом создавать» (Раздел 7 в SKILL.md)**:
  * Обязательная проверка наличия подходящей реализации перед созданием новой функции, компонента, модуля, пакета или файла.
  * Приоритет переиспользования и адаптации над созданием нового решения.
  * Проверка уже установленных зависимостей перед добавлением новых библиотек.
  * Запрет создания теневых дубликатов из-за косметических различий или создания обходных путей вместо исправления существующего кода.
  * Фундаментальный принцип: *«Сначала найти существующее решение. Затем переиспользовать. Затем изменить. И только если ни один из вариантов не подходит — создать новое.»*
* **Блок валидации отсутствия дубликатов**: в чек-лист `Agent Behavioral & Scope Check` включена проверка соблюдения принципа «Сначала искать, потом создавать».
* **Глобальная синхронизация**: правило 15 интегрировано в `GEMINI.md` и `.agents/AGENTS.md`.

### Изменено:
* `SKILL.md`: раздел 7 дополнен подразделом `### 15. Сначала искать, потом создавать`; чек-лист раздела 16 обновлен; версия стандарта повышена до `v1.11.0`.
* `DESIGN_MEMORY.md`: в Avoid Rules добавлено правило `Avoid: Redundant Code & Duplicate Creation (Сначала искать, потом создавать)`.
* `templates/subagent-team-blueprint.md`: обновлены фундаментальные стандарты и инструкции ролей `System Architect`, `Frontend Engineer`, `Backend Engineer` и `Code Reviewer`.

### Study / Review:
**Priority**: CRITICAL
- [x] Интегрировать правило 15 в `SKILL.md` сразу в Раздел 7 и чек-лист Раздела 16
- [x] Синхронизировать глобальные правила `GEMINI.md` и `AGENTS.md`
- [x] Обновить `DESIGN_MEMORY.md` и `templates/subagent-team-blueprint.md`
- [ ] Выполнять обязательный аудит имеющегося кода перед предложением новых сущностей

---

## v1.10.0 — Agent Behavioral Discipline & Strict Scope Adherence
**Дата**: 2026-09-09  
**Приоритет**: CRITICAL  
**Update Log**: [`updates/010-strict-scope-and-behavioral-discipline.md`](./updates/010-strict-scope-and-behavioral-discipline.md)

### Добавлено:
* **Жёсткие правила поведения агента (Раздел 7 в SKILL.md)**:
  * **9. Строгое соответствие запросу**: Агент реализует только то, что явно запросил пользователь. Запрещено самостоятельно добавлять не запрашивавшиеся тексты, кнопки, поля, блоки, страницы, уведомления, статусы или другую функциональность «для удобства», «для красоты», «на будущее» или «по стандарту».
  * **10. Модульность**: Повторно используемую логику выносить в модуль с одной понятной ответственностью и публичным API через `import`, без копирования и формализма.
  * **11. Очистка кода**: Удалять неиспользуемый код, импорты, зависимости, мёртвые функции, отладочные логи и временные решения.
  * **12. Минимум проверок**: Добавлять только проверки, необходимые для корректной работы; исключить проверки «на всякий случай» и обработку гипотетических ошибок.
  * **13. Принцип минимального изменения**: Менять только необходимые файлы и код. Не рефакторить несвязанные части проекта и не менять поведение за пределами задачи.
  * **14. Запрет самовольного расширения**: Категорический запрет придумывать дополнительные функции, UI-элементы, тексты, настройки, проверки, состояния, страницы, API, зависимости, абстракции и сценарии.
* **Блок валидации `Agent Behavioral & Scope Check`**: включен 6-м обязательным чек-листом в финальный аудит перед сдачей проекта.
* **Глобальная синхронизация**: правила 9-14 интегрированы в `GEMINI.md` и `.agents/AGENTS.md`.

### Изменено:
* `SKILL.md`: внедрен Раздел 7 сразу после 6 базовых столпов; разделы 8-18 сквозным образом перенумерованы; операционные правила дополнены пунктом 3 (Strict Scope); версия стандарта повышена до `v1.10.0`.
* `DESIGN_MEMORY.md`: в Avoid Rules добавлено правило `Avoid: Scope Creep & Unauthorized Expansion`.
* `templates/subagent-team-blueprint.md`: обновлены инструкции Frontend Engineer, Backend Engineer, Code Reviewer и регламент Фазы 5 на 6 обязательных чек-листов.

### Study / Review:
**Priority**: CRITICAL
- [x] Интегрировать правила 9-14 в `SKILL.md` сразу после 6 столпов
- [x] Синхронизировать глобальные правила `GEMINI.md` и `AGENTS.md`
- [x] Проверить все роли субагентов на наличие запрета самовольного расширения
- [ ] Разработать процедуру сверки diff перед каждым ответом на предмет отсутствия лишних правок вне скоупа

---

## v1.9.0 — Ban on Cringe Buzzwords, Fake Presets & Pseudo-Hacker Slop
**Дата**: 2026-09-08  
**Приоритет**: CRITICAL  
**Update Log**: [`updates/009-ban-on-cringe-buzzwords-and-fake-presets.md`](./updates/009-ban-on-cringe-buzzwords-and-fake-presets.md)

### Добавлено:
* Категорический запрет **PSEUDO-HACKER SLOP**:
  * Запрещены термины `Bypass Ready`, `Fast Injection`, `Kernel Inject`, `Stealth Inject`, `Memory Bypass`, `Hook Ready`, `Payload Active`, `Anti-Detection Ready`. Применяются строгие инженерные названия (`Готов к работе`, `Подключение`, `Загрузка модуля`).
* Категорический запрет **CHEESY 2-OPTION PRESETS**:
  * Запрещены шаблонные пары опций из чит-меню (`Ghost & Blatant`, `Legit vs Rage`, `Stealth vs Aggressive`, `Silent vs Loud`). Запрещено искусственно навязывать «2 options» ради видимости функционала; разрешены только реальные параметры (`TCP / UDP`, `Стандартный / Расширенный`).
* Категорический запрет **HYPERBOLIC PERFORMANCE SLOP**:
  * Запрещены пустые хвалебные слова в названиях опций и бейджей (`Top Performance`, `Ultra Performance`, `Maximum Speed`, `Turbo Boost`, `Hyper Speed`, `Extreme Power`, `Fast Mode`). Оптимизация формулируется через конкретный технический эффект (`Энергосбережение`, `Аппаратное ускорение`).
* Категорический запрет **UMBRELLA MARKETING CLICHÉS**:
  * Запрещены клише `All-in-One`, `Ultimate Suite`, `Complete Solution`, `Full Pack`. Опции называют вещи своими именами (`Базовый комплект`, `Полная установка`).

### Изменено:
* `SKILL.md`: раздел 7 дополнен подразделом 21, раздел 12 синхронизирован, чеклист Anti-AI-Slop в разделе 15 расширен до 25 пунктов, версия стандарта повышена до `v1.9.0`.
* `references/design-guardrails.md`: добавлен раздел 20, чеклист в разделе 23 расширен до 25 пунктов.
* `DESIGN_MEMORY.md`: в Avoid Rules внесены 3 новых запрета долговременной памяти.
* `templates/subagent-team-blueprint.md`: промпты Frontend Engineer, UX Reviewer и Code Reviewer дополнены проверками на отсутствие псевдохакерского жаргона и фальшивых пресетов; чеклист синхронизирован до 25 пунктов.

### Study / Review:
**Priority**: CRITICAL
- [x] Провести аудит всех интерфейсов на отсутствие псевдохакерского жаргона (`Bypass Ready`, `Fast Injection`)
- [x] Исключить надуманные бинарные опции (`Ghost & Blatant`) в пользу реальных инженерных параметров
- [x] Устранить пустые маркетинговые ярлыки (`Top Performance`, `All-in-One`)
- [ ] Разработать автоматическое правило линтинга для выявления запрещенных ключевых слов в UI-строках

---

## v1.8.0 — Radical Header Minimalism & Ban on Header Badges / Corner Dots
**Дата**: 2026-09-07  
**Приоритет**: CRITICAL  
**Update Log**: [`updates/008-ban-on-header-badges-dots-and-overload.md`](./updates/008-ban-on-header-badges-dots-and-overload.md)

### Добавлено:
* Категорический пожизненный запрет **CORNER STATUS DOTS**:
  * Запрещены любые зелёные, жёлтые, белые, серые точки/индикаторы в углах окна, рядом с названием продукта или в шапке. Статус выражается текстом в функциональной зоне, а не декоративными точками.
* Категорический пожизненный запрет **HEADER BADGES & PILL CLUTTER**:
  * Запрещено размещать в шапке утилиты бейджи тарифов (`Pro`, `Premium`, `Free`), статусы аккаунта и бейджи протоколов (`WireGuard`, `OpenVPN`, `TCP/UDP`).
* Запрет **OVERLOADED TOP BLOCK**:
  * Верхний блок содержит только чистое название продукта или остаётся невидимым. Никаких рядов бейджей, иконок и украшений.
* Запрет **NO ELEMENTS JUST FOR BEAUTY**:
  * Полный запрет на добавление элементов интерфейса ради украшения или заполнения пустоты. Только прямое функциональное назначение.
* Формула максимальной чистоты **PURITY FORMULA**:
  * Интерфейс утилиты строится строго по канону: **[Имя Продукта] + [Основная кнопка] + [Статус] + [Скорость / ключевая метрика] + [Селектор]**.

### Изменено:
* `SKILL.md`: раздел 7 дополнен запретами на точки и плашки в шапке; раздел 10 переработан под стандарт Radical Header Minimalism; чеклист раздела 15 дополнен контролем чистоты шапки; версия повышена до `v1.8.0`.
* `DESIGN_MEMORY.md`: в Avoid Rules внесены 4 новых правила и каноническая формула чистоты.

### Study / Review:
**Priority**: CRITICAL
- [x] Очистить шапку `compact-vpn` от зеленой точки, бейджей `Pro` и `WireGuard`
- [ ] Разработать автоматический линтер для запрета декоративных индикаторов в Header
- [ ] Внедрить Purity Formula во все шаблоны утилит и виджетов

---

## v1.7.0 — No Fake Product Context & User Request > AI Atmosphere
**Дата**: 2026-09-07  
**Приоритет**: CRITICAL  
**Update Log**: [`updates/007-no-fake-product-context.md`](./updates/007-no-fake-product-context.md)


### Добавлено:
* Категорический запрет **NO FAKE PRODUCT CONTEXT**:
  * Запрещено самостоятельно выдумывать и добавлять версии (`PRODUCT // V1.0`), билды (`BUILD 2026.09`), релизы, имена внутренних систем (`SYSTEM V2.4`), технические статусы, режимы работы (`IDLE SCAN`), ярлыки сканеров, названия движков (`NEURAL ENGINE`) и бессмысленные ID.
  * Если пользователь не попросил явно и информация не нужна для работы продукта — она не создаётся.
* Правило **VERSION INFORMATION IS NOT DECORATION**:
  * Запрещено автоматически писать `// V1.0` или `VERSION 1.0` рядом с названием продукта. Версия допустима только если она функционально необходима (About, DevTool, поддержка) или напрямую запрошена. Версия — не украшение хедера.
* Правило **NO FAKE TECHNICAL AESTHETIC**:
  * Запрещено создавать видимость технологичности случайным системным текстом (`IDLE SCAN`, `SYSTEM READY`, `CORE ACTIVE`). Технический текст не является дизайном.
* Принцип **STATUS MUST HAVE CONSEQUENCES**:
  * Любой статус обязан отвечать на вопрос: *«Что изменится для пользователя, если этот статус изменится?»*. Если ничего — статус не должен существовать.
* Стандарт **GREEN DOT ≠ GOOD DESIGN**:
  * Зелёная точка запрещена как визуальный аксессуар (`● ONLINE`, `● IDLE`). Индикатор разрешён строго по 4 критериям (реальный, динамический, значимый, необходимый).
* Стандарт **PRODUCT NAME ONLY**:
  * В Header по умолчанию находится только реальное название продукта. Вопрос: *«Нужна ли эта информация прямо сейчас?»*. Если нет — удалить.
* Запрет **NO FAKE BUILD IDENTITY**:
  * Запрещено придумывать кодовые имена, билды, режимы, протоколы и названия движков (`APP NAME // V1.0`, `NEURAL ENGINE`, `AI POWERED TERMINAL`).
* Чек-лист **INFORMATION MUST EARN ITS PLACE**:
  * 5 вопросов проверки каждого фрагмента текста (если при удалении ничего не меняется — удалить).
* Запрет **NO INVENTED UI STORYTELLING**:
  * Запрещено выдумывать лор, киберпанк-нарратив и сценарии вокруг обычной функции (пример: псевдосканеры в ASCII-просмотрщике).
* Фильтр **THE "WHY WOULD USER CARE?" TEST**:
  * Почему пользователю должно быть не всё равно? Нет ответа — информация удаляется.
* Фундаментальный принцип **USER REQUEST > AI ATMOSPHERE**:
  * Никогда не придумывать продукту личность, систему или процессы, которых в задаче не существует.
* Расширение **Anti-AI-Slop Final Check** до 20 пунктов (полная валидация чистоты контекста).

### Изменено:
* `SKILL.md`: дополнены frontmatter, раздел 7 (правила 3, 9, 11-15), раздел 10 (Header), раздел 12/15 (20 пунктов чеклиста), раздел 20 (версия v1.7.0).
* `references/design-guardrails.md`: расширены разделы 3, 9, 14, добавлены разделы 15-19, обновлен чеклист раздела 22 (20 пунктов).
* `DESIGN_MEMORY.md`: в раздел Avoid внесены 6 новых запретов на выдуманный контекст, фальшивые статусы и навязанный нарратив.
* `templates/subagent-team-blueprint.md`: дополнены регламенты для Frontend Engineer, UX Reviewer и Code Reviewer.

### Study / Review:
**Priority**: HIGH
- [ ] Исследовать UX-паттерны контекстной подачи версий и метаданных в специализированных DevTools/CLI без загрязнения основного рабочего пространства
- [ ] Оценить автоматизированные линтеры UI-текстов на предмет наличия служебных слов-паразитов (`ONLINE`, `READY`, `SECURE`, `IDLE`)
- [ ] Разработать бенчмарк чистоты первого экрана (First-Screen Cognitive Hygiene Benchmark)

---

## v1.6.0 — Cross-Platform Application UI & Window Adaptivity
**Дата**: 2026-09-05  
**Приоритет**: HIGH  
**Update Log**: [`updates/006-cross-platform-window-adaptivity.md`](./updates/006-cross-platform-window-adaptivity.md)

### Добавлено:
* Официальный эталонный справочник [`references/cross-platform-window-adaptivity.md`](./references/cross-platform-window-adaptivity.md):
  * Парадигма **Window-First Adaptivity** для Web, Desktop (macOS, Windows, Linux), GUI и IMGUI;
  * Запрет жестких абсолютных координат ($X/Y$) и фиксированной ширины в изменяемых окнах;
  * Стратегии адаптации для Большого, Среднего и Маленького окна;
  * Фиксация Minimum Window Size;
  * Шкала приоритета контента при сжатии (PRIMARY / SECONDARY / OPTIONAL);
  * Дисциплина GUI Layout (`Parent Container → Layout System → Children`) и IMGUI (`GetContentRegionAvail`, дочерние окна, предотвращение наложений);
  * Протокол миграции Web → Desktop (разведение Web Layout и Desktop Layout, сохранение смысла без слепого копирования);
  * Барьер No Broken Overflow (запрет паразитного скролла всего окна приложения);
  * Протокол многоразмерного тестирования Multi-Size Testing (Minimum → Small → Default → Large → Maximized);
  * 12 пунктов Standard Interaction Check и 10 пунктов Web-to-Desktop Migration Check;
  * 9 обязательных контрольных вопросов перед реализацией layout.
* Блок проверки 5 (`Cross-Platform & Window Adaptivity Check`) в финальном аудите раздела 15 `SKILL.md`.
* Добавление этапа `WINDOW & CROSS-PLATFORM ADAPTIVITY` в производственный конвейер раздела 16 `SKILL.md`.

### Изменено:
* `SKILL.md`: добавлен раздел 6.2, актуализированы разделы 15, 16, 20 и frontmatter (версия v1.6.0).
* `templates/subagent-team-blueprint.md`: дополнены инструкции для System Architect, Frontend Engineer, QA, UX Reviewer и Code Reviewer.
* `templates/analysis-template.md`: блоки 1, 12 и 15 дополнены параметрами платформы и адаптивности окон.
* `DESIGN_MEMORY.md`: дополнен раздел 3.5 (Window Adaptivity) и Avoid-список (Avoid: Hardcoded Window Coordinates, Avoid: Blind Web-to-Desktop Embedding, Avoid: Broken Window Resize).

### Study / Review:
**Priority**: HIGH
- [ ] Исследовать паттерны адаптивных сеток в Desktop/Tauri/Electron приложениях с сохранением высокой плотности информации
- [ ] Оценить применение CSS Subgrid и Container Queries для изолированных оконных панелей
- [ ] Протестировать поведение сложных таблиц данных при экстремальном сжатии окна

---

## v1.5.0 — Communication, Design Memory & Skill Versioning
**Дата**: 2026-09-04  
**Приоритет**: HIGH  
**Update Log**: [`updates/005-communication-design-memory.md`](./updates/005-communication-design-memory.md)

### Добавлено:
* Стандарты коммуникации: русский язык как основной, обязательное краткое комментирование действий («что делается и зачем»).
* Долговременная база памяти [`DESIGN_MEMORY.md`](./DESIGN_MEMORY.md):
  * Фиксация положительной обратной связи (триггеры «красавчик», «топ», «идеально») с декомпозицией по 10 аспектам;
  * Фиксация отрицательной обратной связи в Avoid-список;
  * Накопление User Design DNA (Style, Colors, Typography, Components, Layout, Visual Patterns);
  * Принцип анти-зацикливания и регламент реакции на похвалу.
* Система обязательного версионирования и история изменений (`updates/`, `research/`, `CHANGELOG.md`).
* Правило сохранения истории: старые правила не удаляются, а помечаются как `Deprecated`.

### Изменено:
* `SKILL.md`: интегрированы разделы коммуникации, памяти и версионирования.
* `templates/subagent-team-blueprint.md`: встроена проверка `DESIGN_MEMORY.md` субагентами.

### Study / Review:
**Priority**: HIGH
- [ ] Исследовать автоматическую экстракцию дизайн-токенов из удачных версток
- [ ] Оценить влияние Design DNA на скорость согласования интерфейсов
- [ ] Проверить паттерны взаимодействия в режиме реального времени

---

## v1.3.0 — Design & Development Resources
**Дата**: 2026-09-04  
**Приоритет**: MEDIUM  
**Update Log**: [`updates/004-resources.md`](./updates/004-resources.md)

### Добавлено:
* Официальный реестр ресурсов [`references/resources.md`](./references/resources.md):
  * UI-библиотеки: shadcn/ui, Lucide, Hugeicons;
  * Аудит библиотек и зависимостей через Libraries.dev;
  * Доверенные платформы для дизайн-исследований (styles.repro.design, designmd.me, open-design.ai, aura.build и др.).
* Протокол работы с референсами: `REFERENCE → ANALYSIS → ADAPTATION`.
* 5 контрольных вопросов перед использованием любого внешнего решения.
* Запрет слепого копирования чужих стилей и декоративных элементов.

### Study / Review:
**Priority**: MEDIUM
- [ ] Протестировать мониторинг уязвимостей и активности пакетов через Libraries.dev API
- [ ] Собрать подборку эталонных bento-сеток без лишних обводок

---

## v1.2.0 — Design Justification & Layout & Markup Discipline
**Дата**: 2026-09-04  
**Приоритет**: HIGH  
**Update Log**: [`updates/003-design-justification-layout.md`](./updates/003-design-justification-layout.md)

### Добавлено:
* Стандарт [`references/design-justification.md`](./references/design-justification.md):
  * **Visual Purpose Gate**: 5 категорий допустимых элементов (Действие, Навигация, Информация, Иерархия, Обратная связь);
  * Принцип **Default to Less** и **Removal Test** (*«Что произойдет, если удалить?»*);
  * Запрет на заполнение свободного пространства («Filling Empty Space»).
* Стандарт [`references/layout-discipline.md`](./references/layout-discipline.md):
  * 20 правил семантической вёрстки: Semantic First, No DIV for no reason, Flex vs Grid, Gap before margin, системный Spacing (4–64 px), No positioning as layout, DOM Depth Check;
  * Цепочка: `СМЫСЛ → СТРУКТУРА → SEMANTIC HTML → LAYOUT → RESPONSIVE → STYLING → FINAL SIMPLIFICATION`.
* Финальные чек-листы: Design Justification (14 пунктов) и Layout Final Check (20 пунктов).

### Study / Review:
**Priority**: HIGH
- [ ] Проверить CSS Subgrid для сложных карточных раскладок
- [ ] Протестировать контейнерные запросы (`@container`) взамен классических медиа-выражений

---

## v1.1.0 — Strict Visual Guardrails & Anti-AI-Slop
**Дата**: 2026-09-04  
**Приоритет**: HIGH  
**Update Log**: [`updates/002-anti-ai-slop.md`](./updates/002-anti-ai-slop.md)

### Добавлено:
* Полный манифест интерфейсной гигиены [`references/design-guardrails.md`](./references/design-guardrails.md):
  * **Zero-Emoji Policy**: абсолютный запрет эмодзи в любых узлах UI;
  * Запрет на Dot Labels (`● ONLINE`, `● SECURITY`);
  * Запрет на декоративный security и маркетинговый буллшит (`BUILT FOR THE FUTURE`);
  * Ликвидация Card-Hell и внедрение **Border Last Principle**;
  * Запрет на fake status и fake metrics (`99.9%`, `10K+`);
  * Фильтр элементов по 5 вопросам и чек-лист **Anti-AI-Slop Final Check** (14 пунктов).

### Study / Review:
**Priority**: MEDIUM
- [ ] Оценить применение SVG-микроанимаций вместо статических иконок без создания визуального шума

---

## v1.0.0 — Initial GO-BUILD Standard
**Дата**: 2026-09-04  
**Приоритет**: HIGH  
**Update Log**: [`updates/001-foundation.md`](./updates/001-foundation.md)

### Добавлено:
* Базовый стандарт комплексной разработки цифровых продуктов.
* Принцип сохранения первоначального смысла продукта.
* 16-блочный обязательный формат предпроектного анализа ([`templates/analysis-template.md`](./templates/analysis-template.md)).
* Командная оркестрация 4–10 субагентов ([`templates/subagent-team-blueprint.md`](./templates/subagent-team-blueprint.md)).
* Правило трёх действий (Зашел → Выбрал → Получил результат).
* Запрет бейджей над заголовками и псевдологотипов в header.
