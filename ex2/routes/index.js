var express = require('express');
var router = express.Router();
var Contract = require('../controllers/contract')

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  Contract.list()
    .then(contratos => {
      res.render('index', { cs : contratos, d : data, size: contratos.length});
    })
    .catch(err => {
      res.render('error',{error:err})
    })
});

/* GET home page. */
router.get('/:id', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  Contract.getContract(req.params.id)
    .then(constract => {
      res.render('contract', { c : constract, d : data});
    })
    .catch(err => {
      res.render('error',{error:err})
    })
});

/* GET home page. */
router.get('/inst/:nipc', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  Contract.listByNIPC(req.params.nipc)
    .then(contratos => {
      res.render('institution', { nipc:req.params.nipc, cs : contratos, d : data});
    })
    .catch(err => {
      res.render('error',{error:err})
    })
});

module.exports = router;
