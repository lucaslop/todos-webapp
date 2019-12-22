const express = require('express')
const router = express.Router()
const {dados} = require('../database')
router.get('/', (req, res) => {
    return res.render("cadastro")
})

router.post('/salvar', (req, res) => {
   
    if(dados.indexOf(req.body.tarefainput) > -1){
        return res.render('cadastro',{erro:'Já existe essa tarefa cadastrada'})
    }else{
        dados.push(req.body.tarefainput)
        res.redirect('/')
    }
    
})

router.post('/apagar', (req, res) => {
    var indice = dados.indexOf(req.body.conteudo)
    dados.splice(indice, 1)
    return res.json({ success: "Successfully", status: 200 });

})



module.exports = router;