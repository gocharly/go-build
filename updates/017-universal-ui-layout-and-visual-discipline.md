# Обновление стандарта GO-BUILD: v1.16.0 — Universal UI, Layout & Visual Discipline

**Дата**: 2026-09-10  
**Версия**: v1.16.0  
**Приоритет**: CRITICAL  
**Статус**: Активен  

---

## 1. Причина обновления

Анализ сгенерированных интерфейсов показал две системные проблемы:
1. **Злоупотребление обводками и декоративным мусором (Border-Clutter & UI-Slop)**: автоматическое проставление рамок (`border`) на каждом инпуте, карточке, кнопке и навигационном элементе, обводка сайдбаров, частокол разделительных линий (`dividers`), тени ради «объёма» и градиенты без функциональной цели;
2. **Хрупкость верстки и отсутствие адаптивной целостности (Fixed-Width Fragility & Broken Layout)**: верстка создавалась под одно десктопное окно с жесткими пикселями (`width: 1000px`, `height: 700px`), разваливалась на узких экранах, обрезала длинные тексты и создавала паразитный горизонтальный скролл.

Релиз v1.16.0 внедряет всеобъемлющий стандарт **Universal UI, Layout & Visual Discipline**, состоящий из 25 нормативных разделов.

---

## 2. Ключевые архитектурные компоненты v1.16.0

### 1. Borders Are Not Default Decoration
Рамка — инструмент функционального разграничения высокой стоимости, а не базовый декоративный стиль. По умолчанию **ЗАПРЕЩЕНО** использовать border на: кнопках, карточках, контейнерах, навигации, секциях, панелях, header/footer и инпутах. Иерархия строится через отступы, контраст фона и типографику.

### 2. Дисциплина Inputs, Buttons, Navigation & Dividers
* **Inputs**: поля ввода не получают border по умолчанию; разделение задается мягким фоном, отступами, лейблами и focus-ring.
* **Navigation**: навигация не должна превращаться в сетку рамочных ячеек; оформление строится типографикой и фоном активного пункта.
* **Buttons**: кнопки не получают автоматических рамок и outline; акцент задается цветом, контрастом и типографикой.
* **Dividers**: разделительные полосы используются строго дозированно только между крупными секциями.

### 3. No Decorative UI Slop
Запрещено добавлять без явного запроса: лишние тени (`shadows`), рамки (`borders`), градиенты (`gradients`), разделители (`dividers`), бейджи (`badges`), декоративные фоны, лишние контейнеры, случайные иконки и анимации.

### 4. Responsive By Default & No Fixed-Width Fragility
* Любой UI сразу проектируется как адаптивный на 6 диапазонах (Narrow Mobile <360px, Mobile, Tablet, Laptop, Desktop, Wide Desktop >1536px). Запрещен подход «desktop first, mobile потом».
* Запрещены жесткие размеры в пикселях (`width: 1000px`, `height: 700px`). Используются `%`, `max-width`, `min()`, `max()`, `clamp()`, `flex`, `grid` и флюидные отступы.

### 5. Layout Integrity & Content Adaptation
* Контроль 11 факторов целостности: overflow, horizontal scroll, vertical overflow, collapsed content, text wrapping, button wrapping, input overflow, image overflow, container overflow, flex shrink, grid collapse.
* Вёрстка обязана выдерживать экстремально длинные имена пользователей, длинные email, длинные заголовки, переводы текстов и пустые состояния (Empty State).

### 6. Spacing System, Gap Before Margin & No Div-Hell
* Отступы строго из шкалы (4, 8, 12, 16, 24, 32, 48, 64 px).
* Расстояния в layout задаются свойством `gap`. Запрещены каскады margins.
* Запрещен `Div-Hell` (вложенные div без функции). Семантика первична (`Semantic First`).
* Запрещен `Positioning as Layout`: обычная сетка не строится на `absolute/relative`.

### 7. Аудит компонентов и Accessibility Without Scope Expansion
* Проводятся: 12-вопросный Visual Positioning Audit, Container Audit, Component Audit, State Visual Audit (hover, active, focus-visible, disabled, loading, error) и Image/Media Audit.
* **Приоритет P0 Scope Lock**: a11y и проверки качества применяются строго к изменяемому элементу и не могут служить поводом для попутного рефакторинга других файлов.

### 8. Visual Simplicity Rule & Final UI Stress Test
* Если два варианта одинаково функциональны, выбирается визуально более простой.
* Перед финализацией UI обязателен прогон через 5 блоков Final UI Stress Test (Structure, Layout, Visual, Responsive, Interaction) и ответ на финальный вопрос: *«Можно ли сделать этот интерфейс проще, чище и адаптивнее без потери функциональности?»*.

---

## 3. Измененные файлы

1. `references/universal-ui-layout-and-visual-discipline.md`:
   - Создан полный нормативный справочник по 25 разделам Universal UI, Layout & Visual Discipline.
2. `SKILL.md`:
   - Frontmatter дополнен упоминанием Universal UI, Layout & Visual Discipline.
   - Раздел 6.1 кардинально расширен новыми стандартами верстки и визуальной дисциплины.
   - Раздел 8 дополнен запретами на Borders Are Not Default, No Decorative UI Slop, No Fixed-Width Fragility, No Div-Hell.
   - Раздел 16 (Чеклист) дополнен блоком проверок Final UI Stress Test и Visual Positioning Audit.
   - Версия поднята до `v1.16.0`.
3. `CHANGELOG.md`:
   - Внесена запись релиза v1.16.0 со Study / Review.
4. `README.md`:
   - Актуализирована версия v1.16.0 и список архитектурных столпов.

---

## 4. Study / Review
**Priority**: CRITICAL
- [x] Создать нормативный справочник `references/universal-ui-layout-and-visual-discipline.md`
- [x] Обновить `SKILL.md` (frontmatter, разделы 6.1, 8, 16, 20)
- [x] Синхронизировать `CHANGELOG.md` и `README.md`
- [ ] По умолчанию не использовать borders на кнопках, карточках, навигации и инпутах
- [ ] Не использовать жесткие фиксированные размеры в пикселях
- [ ] Использовать Gap Before Margin и избегать Div-Hell
- [ ] Проверять UI на 6 диапазонах экранов и длинном контенте
- [ ] Задавать финальный вопрос проверки простоты перед завершением работы над UI
