var express = require("express");
var router = express.Router();

var entradaController = require("../controllers/entradaController");

//Recebendo os dados do html e direcionando para a função cadastrar de entradaController.js
router.post("/registrar", function (req, res) {
    entradaController.registrar(req, res);
});

router.get("/selectEntr/:fkUser", function (req, res){
    entradaController.selectEntr(req, res);
});

// router.post("/autenticar", function (req, res) {
//     usuarioController.autenticar(req, res);
// });

module.exports = router;