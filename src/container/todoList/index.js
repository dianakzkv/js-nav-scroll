export class Todo {
  static #NAME = 'todo'

  static #saveData = () => {
    localStorage.setItem(
      this.#NAME,
      JSON.stringify({
        list: this.#list,
        count: this.#count,
      }),
    )
  }

  static #loadData = () => {
    const data = localStorage.getItem(this.#NAME)

    if (data) {
      const { list, count } = JSON.parse(data)
      this.#list = list
      this.#count = count
    }
  }

  static #list = []
  static #count = 0

  static #tasklist = null
  static #template = null
  static #input = null
  static #button = null

  static #createTaskData = (text) => {
    this.#list.push({
      id: ++this.#count,
      text,
      done: false,
    })
  }

  static init = () => {
    this.#tasklist = document.querySelector('.task__list')
    this.#input = document.querySelector('.form__input')
    this.#button = document.querySelector('.form__button')

    this.#template =
      document.getElementById(
        'task',
      ).content.firstElementChild

    this.#button.onclick = this.#handleAdd

    this.#loadData()

    this.#render()
  }

  static #handleAdd = () => {
    const value = this.#input.value
    if (value.length >= 1) {
      this.#createTaskData(value)
      this.#input.value = ''
      this.#saveData()
      this.#render()
    } else {
      alert('Write your task :)')
    }
  }

  static #render = () => {
    this.#tasklist.innerHTML = ''

    if (this.#list.length === 0) {
      this.#tasklist.innerText =
        'Task list is empty. Add a new task 👆🏽'
    } else {
      this.#list.forEach((taskData) => {
        const el = this.#createTaskElem(taskData)
        this.#tasklist.append(el)
      })
    }
  }

  static #createTaskElem = (data) => {
    const el = this.#template.cloneNode(true)

    const [number, text, btnDo, btnCancel] = el.children

    number.innerText = `${data.id}.`
    text.innerText = data.text

    btnCancel.onclick = this.#handleCancel(data)
    btnDo.onclick = this.#handleDo(data, el)

    if (data.done) {
      el.classList.toggle('task--done')
    }

    return el
  }

  static #handleCancel = (data) => () => {
    if (confirm('Delete this task?')) {
      const result = this.#deleteById(data.id)
      if (result) this.#render()
    }

    this.#saveData
  }

  static #deleteById = (id) => {
    this.#list = this.#list.filter((item) => item.id !== id)
    // this.#count--
    return true
  }

  static #handleDo = (data, el) => () => {
    const result = this.#toggleDone(data.id)

    if (result === true || result === false) {
      el.classList.toggle('task--done')
    }

    this.#saveData
  }

  static #toggleDone = (id) => {
    const task = this.#list.find((item) => item.id === id)

    if (task) {
      task.done = !task.done
      return task.done
    } else {
      return null
    }
  }
}

Todo.init()

window.todo = Todo
