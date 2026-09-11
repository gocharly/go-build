# Обновление стандарта GO-BUILD: v1.19.0 — Rail Pipeline & Engineering Reward Engine

**Дата**: 2026-09-11  
**Версия**: v1.19.0  
**Приоритет**: CRITICAL  
**Статус**: Активен  

---

## 1. Причина обновления

Трансформация стандарта GO-BUILD из пассивного свода запретов («уголовный кодекс») в **детерминированный рельсовый конвейер (State Machine)** с наглядным разделением каждого этапа на зелёный коридор (**DO / ENCOURAGED**) и красный коридор (**DON'T / FORBIDDEN**), а также внедрение математической модели оценки качества (**Engineering Reward Score**).

---

## 2. Основные положения обновления

### 1. Нормативный справочник (`references/pipeline-and-reward-engine.md`)
Включает:
- **6-фазный рельсовый конвейер**:
  1. *Scope Lock & Task Sizing* (классификация масштаба и фиксация 4 квадрантов);
  2. *Discovery & Reuse* (поиск по кодовой базе, stdlib и защита от дубликатов);
  3. *Architecture & Naming Design* (именование по действию, изоляция доменов, закрытые схемы DTO);
  4. *Surgical Execution* (Pre-Action Stamp, минимальный diff, Anti-Style-Drift, Border Last, Zero-Emoji);
  5. *Defensive & Quality Verification* (автономный запуск тестов/линтеров, защита от IDOR, SQLi, XSS, Supply Chain);
  6. *Completion & Reward Score* (расчет скоринга и краткий отчёт на русском языке).
- **Матрица фаз**: четкие правила «Что можно и нужно делать» vs «Что не стоит и запрещено» на каждом конкретном шаге.
- **Engineering Reward Engine**:
  - Базовый скоринг: `100 / 100` (эталонное выполнение);
  - Бонусы (+10): Surgical Precision, Reuse First, Senior Simplicity, Predictable Naming, Defensive Guard, Clean UI;
  - Штрафы (-20..-50): Scope Creep, Style Drift, Abstract Naming, UI Slop & Emoji, Junk Module, Security Breach, Command Dumps.
- **Прогрессная плашка вознаграждения**: компактный вывод статуса выполнения в чат.

### 2. Модернизация ядра `SKILL.md`
- Ключевые операционные правила перестроены в виде 6-фазного конвейера.
- Раздел 18 дополнен подразделом 18.4 по генерации плашки вознаграждения (Reward Score Badge).
- Версия повышена до `v1.19.0`.

---

## 3. Измененные файлы

1. `references/pipeline-and-reward-engine.md`:
   - Создан нормативный справочник по конвейеру и системе вознаграждения.
2. `SKILL.md`:
   - Ядро операционных правил перестроено в 6-фазный конвейер.
   - Добавлен раздел 18.4 (Reward Score Badge).
   - Версия стандартизирована на `v1.19.0`.
3. `README.md`:
   - Обновлена версия стандарта и ключевые столпы.
4. `CHANGELOG.md`:
   - Зафиксирован релиз `v1.19.0`.

---

## 4. Study / Review
**Priority**: CRITICAL
- [x] Создать `references/pipeline-and-reward-engine.md`
- [x] Обновить `SKILL.md` (вводная часть, 18.4, 20)
- [x] Синхронизировать `README.md` и `CHANGELOG.md`
- [ ] Двигаться строго по 6 фазам конвейера без перескакивания гейтов
- [ ] Выводить прогрессную плашку Engineering Reward Score при сдаче задачи
