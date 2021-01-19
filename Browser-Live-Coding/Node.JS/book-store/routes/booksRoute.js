const { getBooks, getOneBook } = require('../controllers/booksController')

const router = require('express').Router()

router.route('/').get(getBooks)
router.route('/:id').get(getOneBook)

module.exports = router