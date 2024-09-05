const express = require("express");
const router = express.Router();
const jogo_controller = require("../controllers/jogo_controller.js");

router.post("/", (req, res) => {
  const jogo = req.body;
  const code = jogo_controller.store(jogo);
  res.status(code).json();
});

router.get("/", (req, res) => {
  const jogo = jogo_controller.index();
  res.json(jogo);
});

router.get("/:id", (req, res) => {
  const jogo = jogo_controller.show(req.params.id);
  res.json(jogo);
});

router.put("/:id", (req, res) => {
  const jogo = req.body;
  const code = jogo_controller.update(req.params.id, jogo);
  res.status(code).json();
});

router.delete("/:id", (req, res) => {
  jogo_controller.destroy(req.params.id);
  res.json();
});

module.exports = router;
