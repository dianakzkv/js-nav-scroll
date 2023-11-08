// Підключаємо роутер до бек-енду
const express = require('express')
const router = express.Router()

// Підключіть файли роутів
const test = require('./test')
// Підключіть інші файли роутів, якщо є
const nav = require('./nav')
const scroll = require('./scroll')

// Об'єднайте файли роутів за потреби
router.use('/test', test)
// Використовуйте інші файли роутів, якщо є
router.use('/', nav)
router.use('/', scroll)

// Експортуємо глобальний роутер
module.exports = router
