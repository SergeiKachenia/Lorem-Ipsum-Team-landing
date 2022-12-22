# Lorem Ipsum Team Website

Веб-сайт команды Lorem Ipsum Team

https://main--unique-puffpuff-6c797d.netlify.app/

## Описание проекта
### Структура сайта
Сайт состоит из двух страниц: ``О нас`` и ``Проекты``. 
<br><br>
На первой странице находится информация об команде, об преимуществах перед другими и контактная информация. Описание каждого члена команды происходит в отдельном компоненте ``TeamMemberCard``, а сами компоненты находятся в слайдере ``AliceCarousel``. Контактная информация состоит из формы связи (``FeedbackForm``, ``FeedbackPopup``), карты и списка членов команды с их метками на карте. Карта реализована через __react-yandex-maps__. Преимущества отображаются в отдельных карточках ``BenefitCard``.
<br><br>
На второй странице находится список проектов, в создании которых участвовали участники команды. Краткая информация об проектах отображается в отдельных карточках ``ProjectCard`` (по аналогии с ``BenefitCard``), по нажатию на которые открывается pop-up окно ``ProjectPopup``, содержащее полную информацию об проекте, а также слайдер ``AliceCarousel`` с фотографиями, которые прикреплены к проекту. Компонент с карточками ``ProjectCards`` имеет лоадер, позволяющий постепенно подгружать часть проектов по нажатию на кнопку.

### Стилизация сайта
Каждый цвет использованный в проекте хранится в отдельной переменной SCSS, список которых хранится в файле ``styles/global.scss``. Благодаря подобному решению существенно упрощается процесс разработки темной темы сайта, а также ускоряется процесс правок связанных с цветами компонентов.

Помимо цветов в файле ``styles/global.scss`` хранятся mixin'ы, упрощающие прописывание стилей у компонентов (mixin'ы для текста, для flex отображения и не только) и пресеты размеров для media запросов.

### Особенности проекта
<ul>
  <li>Наличие смены темы сайта (Светлая/Тёмная)</li>
  <li>Наличие смены языка отображаемой информации (Русский/English)</li>
  <li>Наличие прелоадеров/лоадеров</li>
  <li>Наличие полностью рабочей формы обратной связи</li>
</ul>

### Использованные технологии
<ul>
  <li>React</li>
  <li>TypeScript</li>
  <li>SCSS</li>
  <li>Redux Toolkit</li>
</ul>

## Состав команды
[Сергей](../../../../SergeiKachenia) - ментор  
[Даниил](../../../../Danxay) - тимлид  
[Артём](../../../../Haping61), [Александр](../../../../AnimeLore), [Дарья](../../../../DariaX06) - члены команды
# Кросс-ревью
## рекомендаций:
* форма при адаптиве лучшее уменьшить шрифты.
* нету формы поиска.
* в компоненте ProjectCards зачем оборачивать в div компонент TfiReload
## согласно тз :
* нету тестов -1бал =( , (Инфраструктура)
* нету 404 страницы -1бал =( , страницу 404 надо делать обязательно !  (Результаты, продукт в целом)
# Проект получился бомбический богатый стек.Настроенны форматеры читать код приятно! Вы большие Молодцы!
