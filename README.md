# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Спиннеры

В проекте реализованы несколько спиннеров для отображения состояния загрузки:

1. **Spinner**: Использует компонент `ScaleLoader` из библиотеки `react-spinners`. Он отображает анимацию загрузки с текстом "Загрузка...". Фон полупрозрачный, а контент спиннера центрирован.

2. **Spinner2**: Использует компонент `DotLoader` из `react-spinners`. Этот спиннер также отображает текст "Загрузка..." и имеет стиль с тенью и эффектом увеличения при наведении.

3. **Spinner3**: Использует компонент `RingLoader` из `react-spinners`. Он имеет аналогичный стиль, как и предыдущие спиннеры, с текстом "Загрузка..." и полупрозрачным фоном.

Каждый спиннер принимает пропс `isLoading`, который управляет его отображением. Спиннеры могут быть использованы для улучшения пользовательского опыта при загрузке данных.