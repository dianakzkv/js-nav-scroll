export const createElement = (tag, className, text) => {
  const elem = document.createElement(tag)

  if (className) {
    elem.className = className
  }

  if (text) {
    elem.innerHTML = text
  }

  return elem
}

const HEADER_BUTTON_LIST = [
  {
    width: 24,
    height: 24,
    src: '/svg/arrow-back.svg',
  },
  { width: 24, height: 24, src: '/svg/avatar.svg' },
]

export const createHeader = () => {
  const header = createElement('header', 'header')

  HEADER_BUTTON_LIST.forEach((params) => {
    const button = createElement('button', 'button')

    const img = createElement('img')

    Object.entries(params).forEach(([key, value]) => {
      img[key] = value
    })

    button.append(img)

    header.append(button)
  })

  return header
}

const POST_LIST = [
  {
    category: [
      { text: 'Важливо', id: 1 },
      { text: 'Нова', id: 2 },
    ],
    info: 'До біса планувальник, наймаємо дизайнера і готуємося до презентації, як Джобс',
    date: '25.01',
    viewed: false,
  },
  {
    category: [{ text: 'Важливо', id: 1 }],
    info: 'Ми хотіли щоб у цьому чаті було близько 150 людей щоб зробити якісний пак самопрезентацій.',
    date: '15.01',
    viewed: true,
  },
]

export const createPost = () => {
  const postList = createElement('main', 'post__list')

  POST_LIST.forEach((postData) => {
    const post = createElement(
      'div',
      postData.viewed
        ? 'post__card post__card--viewed'
        : 'post__card',
    )
    const postHeader = createElement('div', 'post__header')
    const categoryList = createElement(
      'div',
      'post__category-list',
    )

    postData.category.forEach((category) => {
      const categoryLabel = createElement(
        'span',
        `post__category post__category--${category.id}`,
        category.text,
      )
      categoryList.append(categoryLabel)
    })

    const dateLabel = createElement(
      'span',
      'post__date',
      postData.date,
    )

    postHeader.append(categoryList, dateLabel)

    const info = createElement(
      'p',
      postData.viewed
        ? 'post__text post__text--viewed'
        : 'post__text',
      postData.info,
    )

    post.append(postHeader, info)

    postList.append(post)
  })

  return postList
}

const TABS = [
  { text: 'База знань', viewed: true },
  { text: 'Інформація' },
]

export const createNav = () => {
  const nav = createElement('nav', 'tabs')

  TABS.forEach((tabsData) => {
    const tab = createElement(
      'div',
      tabsData.viewed ? 'tab tab--viewed' : 'tab',
      tabsData.text,
    )

    nav.append(tab)
  })

  return nav
}
