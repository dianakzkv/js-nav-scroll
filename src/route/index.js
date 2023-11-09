// Підключаємо роутер до бек-енду
const express = require('express')
const router = express.Router()

// Підключіть файли роутів
// const test = require('./test')
// Підключіть інші файли роутів, якщо є
const nav = require('./nav')
const scroll = require('./scroll')
const blog = require('./blog')
const blogCommuniti = require('./blog-communiti')
const todoList = require('./todoList')

// Об'єднайте файли роутів за потреби
// router.use('/test', test)
// Використовуйте інші файли роутів, якщо є
router.use('/', nav)
router.use('/', scroll)
router.use('/', blog)
router.use('/', blogCommuniti)
router.use('/', todoList)

// Експортуємо глобальний роутер
module.exports = router
