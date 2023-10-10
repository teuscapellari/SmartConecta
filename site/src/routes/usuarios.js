var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.get("/selectMorad/:fkUser", function (req, res){
    usuarioController.selectMorad(req, res);
});

router.post("/alterarInfo", function (req, res) {
    usuarioController.alterarInfo(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.post("/selectInfo", function (req, res) {
    usuarioController.selectInfo(req, res);
});

module.exports = router;