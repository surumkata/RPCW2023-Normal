var axios = require('axios')

module.exports.list = () => {
    return axios.get('http://localhost:15015/contracts')
        .then(resposta => {
            return resposta.data
        })
        .catch(err => {
            return err
        })
}

module.exports.getContract = id => {
    return axios.get('http://localhost:15015/contracts/'+id)
        .then(resposta => {
            return resposta.data
        })
        .catch(err => {
            return err
        })
}

module.exports.listByNIPC = nipc => {
    return axios.get('http://localhost:15015/contracts?nipc='+nipc)
        .then(resposta => {
            return resposta.data
        })
        .catch(err => {
            return err
        })
}