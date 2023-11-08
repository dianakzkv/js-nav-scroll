import {
  createElement,
  createHeader,
  createNav,
} from '../../script/blog'

const page = document.querySelector('.content')

const header = createHeader()
page.append(header)

const title = createElement('h1', null, "Ком'юніті")
page.append(title)

const main = createElement('main', 'main__conten')
page.append(main)

const nav = createNav()
main.append(nav)

// const hero = createElement('img', 'hero-img', '')

main.append(
  createElement(
    'div',
    'hero',
    "Зустрічай наше ком'юніті<br> у телеграм!",
  ),
  createElement(
    'p',
    'paragraph--title',
    'Що таке база знань?',
  ),
  createElement(
    'p',
    'paragraph',
    'База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте и знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит информацию, являющуюся результатом решения предыдущих задач. ',
  ),
  createElement(
    'button',
    'main-button',
    "Перейти до ком'юніті у Телеграм",
  ),
)
