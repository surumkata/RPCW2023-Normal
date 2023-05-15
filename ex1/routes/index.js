var express = require('express');
var router = express.Router();
var Contract = require('../controllers/contract')

router.get('/contracts', function(req, res) {
  if(req.query.year){
    Contract.listContractPerYear(req.query.year)
    .then(dados => res.status(200).json(dados))
    .catch(erro => res.status(520).json({erro: erro, mensagem: "Erro na listagem dos contratos."}))
  }
  else if(req.query.inst){
    Contract.listContractPerInstituition(req.query.inst)
    .then(dados => res.status(200).json(dados))
    .catch(erro => res.status(520).json({erro: erro, mensagem: "Erro na listagem dos contratos."}))
  }
  else if(req.query.nipc){
    Contract.listContractPerNIPC(req.query.nipc)
    .then(dados => res.status(200).json(dados))
    .catch(erro => res.status(520).json({erro: erro, mensagem: "Erro na listagem dos contratos."}))
  }
  else{
    Contract.list()
      .then(dados => res.status(200).json(dados))
      .catch(erro => res.status(520).json({erro: erro, mensagem: "Erro na listagem dos contractos."}))
  }
});

router.get('/contracts/courses', function(req, res) {
  Contract.listCursos()
    .then(dados => res.status(200).json(dados))
    .catch(erro => res.status(520).json({erro: erro, mensagem: "Erro na listagem dos cursos."}))
});


router.get('/contracts/institutions', function(req, res) {
  Contract.listInstituicoes()
    .then(dados => res.status(200).json(dados))
    .catch(erro => res.status(520).json({erro: erro, mensagem: "Erro na listagem das instituições."}))
});


router.get('/contracts/:id', function(req, res) {
  Contract.getContract(req.params.id)
    .then(dados => res.status(200).json(dados))
    .catch(erro => res.status(521).json({erro: erro, mensagem: "Erro no get de um contrato."}))
});

router.delete('/contracts/:id', function(req, res) {
  Contract.deleteContract(req.params.id)
    .then(dados => res.status(200).json(dados))
    .catch(erro => res.status(523).json({erro: erro, mensagem: "Erro na remoção dum contrato."}))
});

router.post('/contracts', (req, res) => {
  Contract.addContract(req.body)
    .then(dados => res.status(201).json(dados))
    .catch(erro => res.status(522).json({erro: erro, mensagem: "Erro na inserção dum contrato."}))
})

module.exports = router;
