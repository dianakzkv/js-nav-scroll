import {
  createElement,
  createHeader,
  createPost,
} from '../../script/blog'

const page = document.querySelector('.content')

const header = createHeader()

page.append(header)

const title = createElement('h1', null, 'My blog')

page.append(title)

const post = createPost()
page.append(post)
