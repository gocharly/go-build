# UI, Layout & Visual Discipline

**Версия стандарта**: v1.16.1  
**Статус**: Обязательный стандарт (P1-MANDATORY & P0-ABSOLUTE для визуальных запретов)  
**Область действия**: Все пользовательские интерфейсы (Web, Desktop, Mobile, GUI, IMGUI, Admin, Dashboards, Components).

---

## 1. Borders Are Not Default Decoration

Обводка (`border`, `outline`, рамка контейнера) **не должна автоматически применяться ко всем элементам**.

Перед добавлением обводки определить её реальную функцию:
* визуальное разделение;
* обозначение интерактивного состояния;
* выделение важного блока;
* обозначение границы поля;
* структурная необходимость.

Если обводка ничего полезного не добавляет — не использовать её.

### По умолчанию не использовать border на:
* button;
* card;
* container;
* navigation;
* sidebar;
* header;
* footer;
* section;
* panel;
* input.

Сначала использовать:
* spacing;
* background;
* typography;
* alignment;
* contrast;
* whitespace;
* hierarchy.

---

## 2. Subtle Border Fallback

Правило `No Border Default` не является абсолютным запретом.

Если элемент и его родитель имеют одинаковый или практически одинаковый фон и без границы элемент невозможно нормально визуально отделить, разрешается минимальная subtle border.

Пример:
```css
border: 1px solid var(--border-subtle);
```

### Условия применения:
* border действительно нужен для визуального разделения;
* используется минимальная выразительность;
* border не добавляется просто для украшения;
* существующий дизайн проекта имеет приоритет.

### Приоритет выбора:
```text
No Border Default
→ проверка визуального разделения
→ если разделение невозможно другим способом
→ subtle border
```

---

## 3. UI Zero-Slop

Не добавлять без необходимости:
* декоративные borders;
* лишние shadows;
* gradients;
* divider lines;
* badges;
* лишние containers;
* лишние backgrounds;
* декоративные icons;
* animation;
* wrapper elements.

Каждый визуальный элемент должен иметь конкретную функцию.

---

## 4. Gap Before Margin

Для layout-групп предпочитать:
```css
display: flex;
gap: ...;
```
вместо:
```css
margin-left
margin-right
margin-top
```
на отдельных соседних элементах.

Margin разрешён там, где он действительно выражает внешний отступ конкретного элемента.

Не превращать правило `gap` в механический запрет margin.

---

## 5. No Div-Hell

Не создавать глубокую вложенность без причины.

Предпочитать:
```html
<form>
  <input />
  <button />
</form>
```
вместо множества декоративных wrappers.

Использовать семантические элементы:
```text
main
section
nav
header
footer
form
button
label
```
где они подходят.

---

## 6. No Positioning as Layout

Не использовать:
```css
position: absolute;
```
для обычного layout.

Для layout использовать:
```text
flex
grid
normal flow
gap
padding
margin
```

Absolute positioning допустим для реальных overlays:
* tooltip;
* badge;
* floating control;
* decorative element;
* overlay;
* dropdown;
* modal-related positioning.

Не использовать absolute для имитации обычной flex/grid-структуры.

---

## 7. Responsive by Default

UI должен работать не только на основном размере экрана.

Проверять минимум:
```text
320px
375px
414px
640px
768px
1024px
1280px
1440px+
```

Не проектировать только desktop и потом пытаться «починить mobile».

---

## 8. Responsive Integrity

Проверять:
* horizontal overflow;
* text wrapping;
* flex shrinking;
* grid collapse;
* button overflow;
* navigation overflow;
* input width;
* long usernames;
* long emails;
* long titles;
* translations;
* empty states;
* maximum-content states.

Не использовать хрупкие фиксированные размеры там, где нужен responsive layout.

---

## 9. Flex Text Safety

Для flex-layout с потенциально длинным текстом использовать соответствующие ограничения.

Например:
```css
min-width: 0;
```
и при необходимости:
```css
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
```

Но не обрезать текст автоматически, если пользователь должен видеть его полностью. Выбор зависит от контекста.

---

## 10. Responsive Restructuring

Если desktop-layout физически не помещается на mobile, перестроить структуру.

Например:
```text
desktop:
avatar | name | email | role | action

mobile:
avatar
name
email
role
action
```

Не пытаться сохранить desktop-структуру любой ценой.

---

## 11. Visual Hierarchy

Перед добавлением border/shadow/background проверить:
1. Можно ли решить проблему spacing?
2. Можно ли решить её typography?
3. Можно ли решить её contrast?
4. Можно ли решить её alignment?
5. Можно ли решить её background?
6. Только после этого — border/shadow.

---

## 12. Component States

Для интерактивных компонентов учитывать только действительно существующие состояния:
```text
default
hover
active
focus
disabled
loading
error
success
empty
```

Не создавать дополнительные состояния без необходимости.

---

## 13. Accessibility

Accessibility учитывать при реализации.

Но accessibility не должна использоваться как причина для:
* изменения несвязанного UI;
* полного рефакторинга legacy;
* изменения архитектуры;
* добавления дополнительных компонентов;
* выхода за Scope Lock.

Если accessibility-проблема непосредственно связана с текущей задачей — исправить её.  
Если нет — не расширять задачу.

---

## 14. Surgical Task Priority

Для точечных задач:
```text
P0 Scope Lock
>
Existing Project Architecture
>
Requested Change
>
Minimal Diff
>
General Refactoring Rules
>
Optional Improvements
```

Если legacy-код нарушает правила верстки, но пользователь просит изменить одну строку — менять только одну строку.

Не исправлять legacy layout «заодно».

---

## 15. Final UI Audit

Если задача затрагивает UI:
- [ ] Layout корректен;
- [ ] Нет unnecessary borders;
- [ ] Нет unnecessary shadows;
- [ ] Нет unnecessary gradients;
- [ ] Нет Div-Hell;
- [ ] Нет absolute positioning как обычного layout;
- [ ] Используется gap где уместно;
- [ ] Нет horizontal overflow;
- [ ] Long content обработан;
- [ ] Mobile работает;
- [ ] Tablet работает;
- [ ] Desktop работает;
- [ ] Interactive states работают;
- [ ] Accessibility не нарушена.

---

## 16. Основной принцип

GO-BUILD должен создавать:
```text
предсказуемый responsive UI
+ минимальный visual noise
+ понятную семантическую структуру
```

Главный вопрос перед добавлением любого визуального элемента:
> «Это действительно необходимо для текущей задачи или я создаю оформление ради оформления?»  
> Если второе — не делать.
