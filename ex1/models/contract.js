const mongoose = require('mongoose')

var contractSchema = new mongoose.Schema({
    _id:String,
    NomeInstituicao: String,
    NIPCInstituicao: Number,
    NomeTitularContrato: String,
    CienciaID: String,
    ORCID: String,
    CienciaVitae: String,
    Carreira_RPN: String,
    Categoria_RPN: String,
    Vinculo_RPN: String,
    RegimePrestacaoServico: String,
    DataInicioContrato: String,
    DataFimContrato: String,
    ETIremunerado: Number,
    ProcedimentoVinculacao: String,
    AreasInvestigacao: String,
    NivelFormação: String,
    InstituicaoEnsino: String,
    PaisInstituição: String,
    AnoDiploma: Number,
    Curso: String,
    AreaCNAEF: String,
    AreaFORD: String,
    ProvasAgregacao: Number,
    TituloEspecialista: Number,
    ProvasCoordenacao: Number,
    ProvasAptidao: Number,
    AnoInicioContrato: Number
});

module.exports = mongoose.model('contract', contractSchema)