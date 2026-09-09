# GO-BUILD Update 003: Design Justification & Layout & Markup Discipline

## Version
v1.2.0

## Date
2026-09-04

## Type
Rule / Frontend Architecture / Quality Gate

## Priority
HIGH

## What changed
Созданы два фундаментальных стандарта:
1. `references/design-justification.md`: Visual Purpose Gate (5 категорий), запрет Filling Empty Space, Default to Less, Removal Test.
2. `references/layout-discipline.md`: 20 правил семантической верстки, Flex vs Grid, Spacing System, DOM Depth Check.

## Why
Предотвратить необоснованное разрастание UI-элементов («красиво выглядит», «страница кажется пустой») и ликвидировать «div soup» / вложенный ад layout-контейнеров.

## New rules
* **Visual Purpose Gate**: элемент допустим только при наличии цели: Действие, Навигация, Реальная информация, Иерархия, Обратная связь.
* **Default to Less**: при сомнениях всегда выбирается вариант «не добавлять лишний элемент».
* **Removal Test**: если при удалении элемента интерфейс не изменился или стал лучше — немедленно удалять.
* **Semantic First & No DIV for no reason**: использование `header`, `nav`, `main`, `section`, `article` вместо `div`.
* **Gap Before Margin**: системные расстояния через `gap` и единую шкалу (4–64 px).
* **DOM Depth Check**: постоянный контроль глубины дерева вложенности.
* Чек-листы: Design Justification (14 пунктов) и Layout Final Check (20 пунктов).

## Changed rules
* Внедрена цепочка верстки: `СМЫСЛ → СТРУКТУРА → SEMANTIC HTML → LAYOUT → RESPONSIVE → STYLING → FINAL SIMPLIFICATION`.

## Removed
* Запрещены пустые `<div></div>` ради отступов и позиционирование (`position: absolute`) как способ верстки сетки.

## Study / Review
- [ ] Оценить CSS Subgrid для гибких сеток внутри гридов
- [ ] Исследовать `@container` queries для независимых модулей

## Affected files
- SKILL.md
- references/design-justification.md
- references/layout-discipline.md
- templates/subagent-team-blueprint.md
- CHANGELOG.md

## Examples
*Правильно*: `main > section.grid.gap-6 > article` вместо `div > div > div > div > div`.
