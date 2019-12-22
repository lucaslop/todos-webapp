const express = require('express')
const router = express.Router()
const {dados} = require('../database')


router.get('/', (req, res) => {
    return res.render("home", { tarefas: dados })
})

module.exports = router;