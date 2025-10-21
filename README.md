Тестовое задание на позицию Frontend Developer. 

**Макет:** [Figma](https://www.figma.com/design/csMMpIunLLD6mv8ZWhnzqg/frontend-test-mid)

---

## Что реализовано

### Основа
- Адаптивная верстка (mobile/tablet/desktop)
- Шрифты Playfair Display и Roboto
- БЭМ методология
- Чистый SCSS без фреймворков
- HTML5
- Vite сборщик
- Vanilla JS, без фреймворков 

### Функционал
- **Модальное окно** с видео — открывается по клику, autoplay с 35 секунды, закрытие по ESC/overlay/кнопке, видео из ТЗ не доступно в Rutube(или я что то не понял) поставил свое
- **Слайдер отзывов** — переключение по клику на аватарку, фото из Figma
- **Валидация формы** — все поля проверяются, real-time ошибки, проверка по Enter/Submit

### Дополнительно
- Якорные ссылки
- Minify CSS/JS, code splitting, сжатие изображений
- ESLint + Prettier

---

## Что добавил от себя

- Sticky header с эффектом при скролле
- Burger menu для мобильных
- Активная ссылка в меню при скролле
- SCSS миксины (прост)
- Тостер при отправке формы и при смене видео(ориг не работает)


## Запуск проекта

```bash
npm install
npm run dev
npm run build
npm run preview
npm run lint
npm run format
    
