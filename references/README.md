# GO-BUILD: Справочники архитектурного стандарта (References)

В этой директории собраны углубленные справочные руководства, детализирующие требования стандарта GO-BUILD.

## Структура справочников:

1. **Рельсовый конвейер и система вознаграждения**:
   - [`pipeline-and-reward-engine.md`](./pipeline-and-reward-engine.md) — 6-фазный рельсовый конвейер разработки (State Machine), матрица «DO & ENCOURAGED» vs «DON'T & FORBIDDEN», математическая модель Engineering Reward Score и правила вывода итоговой плашки.

2. **Архитектура, именование и воркфлоу**:
   - [`architecture-naming-and-workflow.md`](./architecture-naming-and-workflow.md) — 24 правила прозрачной архитектуры, доменная группировка, предсказуемые имена функций по действию (`calculatePrice`, `createUser`), логика зависимостей и пошаговый алгоритм разработки.

3. **Защищенная архитектура и безопасность**:
   - [`defensive-architecture-and-security.md`](./defensive-architecture-and-security.md) — стандарты безопасности по результатам анализа 818 скиллов: Zero-Trust валидация входных данных, закрытые DTO-схемы, защита от BOLA/IDOR через Data Layer Binding, параметризация SQL, экранирование XSS, аудит Supply Chain.

4. **Дисциплина исполнения и Scope Lock**:
   - [`rule-enforcement-and-execution-discipline.md`](./rule-enforcement-and-execution-discipline.md) — иерархия приоритетов P0–P3, 4 квадранта Scope Lock, шлюз Pre-Action Gate, матрица Rule Trigger Map, Violation Protocol и Continuous Compliance Check.

5. **Модульность и инженерная простота**:
   - [`universal-modularity-and-code-simplicity.md`](./universal-modularity-and-code-simplicity.md) — Main File Principle, порог маленького модуля (30–50 строк), Rule of Three, тест старшего инженера, запрет свалок `utils/` и `helpers/`.

6. **Дисциплина интерфейса и вёрстки**:
   - [`universal-ui-layout-and-visual-discipline.md`](./universal-ui-layout-and-visual-discipline.md) — Borders Are Not Default Decoration, Subtle Border Fallback, Gap Before Margin, No Div-Hell, No Positioning as Layout, Responsive by Default (320px–1440px+), Final UI Stress Test.
   - [`layout-discipline.md`](./layout-discipline.md) — семантическая вёрстка (Semantic First) и структурная дисциплина DOM.
   - [`design-guardrails.md`](./design-guardrails.md) — визуальные запреты: Zero-Emoji, Anti-AI-Slop, No Fake Product Context, Radical Header Minimalism.
   - [`design-justification.md`](./design-justification.md) — Visual Purpose Gate (Действие, Навигация, Информация, Иерархия, Feedback) и Removal Test.
   - [`cross-platform-window-adaptivity.md`](./cross-platform-window-adaptivity.md) — Window-First Adaptivity, адаптивность окон при сжатии/растяжении, Content Priority (PRIMARY, SECONDARY, OPTIONAL), Web-to-Desktop миграция.

7. **Ресурсы и библиотеки**:
   - [`resources.md`](./resources.md) — каталог проверенных библиотек компонентов, векторных иконок, аудит зависимостей через Libraries.dev и референсы дизайн-систем.
