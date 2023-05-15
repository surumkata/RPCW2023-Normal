var Contract = require('../models/contract')

module.exports.list = () => {
    return Contract
        .find()
        .sort({_id:1})
        .then(dados => {
            return dados
        })
        .catch(erro => {
            return erro
        })
}

module.exports.getContract = id => {
    return Contract
        .findOne({_id:id})
        .then(dados => {
            return dados
        })
        .catch(erro => {
            return erro
        })
}

module.exports.listContractPerYear = year => {
    return Contract
        .find({AnoInicioContrato:year},{})
        .sort({_id:1})
        .then(dados => {
            return dados
        })
        .catch(erro => {
            return erro
        })
}

module.exports.listContractPerInstituition = inst => {
    return Contract
        .find({NomeInstituicao:inst},{})
        .sort({_id:1})
        .then(dados => {
            return dados
        })
        .catch(erro => {
            return erro
        })
}

module.exports.listContractPerNIPC = nipc => {
    return Contract
        .find({NIPCInstituicao:nipc},{})
        .sort({_id:1})
        .then(dados => {
            return dados
        })
        .catch(erro => {
            return erro
        })
}


module.exports.listCursos = () => {
    return Contract
        .distinct("Curso")
        .then(dados => {
            return dados
        })
        .catch(erro => {
            return erro
        })
}

module.exports.listInstituicoes = () => {
    return Contract
        .distinct("NomeInstituicao")
        .then(dados => {
            return dados
        })
        .catch(erro => {
            return erro
        })
}

module.exports.addContract = c => {
    return Contract
        .create(c)
        .then(dados => {
            return dados
        })
        .catch(erro => {
            return erro
        })
}

module.exports.deleteContract = id => {
    return Contract
        .deleteOne({_id:id})
        .then(dados => {
            return dados
        })
        .catch(erro => {
            return erro
        })
}