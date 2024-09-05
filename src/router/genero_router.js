const express = require("express");
const router = express.Router();
const genero_controller = require("../controllers/genero_controller.js");

router.post("/", (req, res) => {
  const genero = req.body;
  const code = genero_controller.store(genero);
  res.status(code).json();
});

router.get("/", (req, res) => {
  const genero = genero_controller.index();
  res.json(genero);
});

router.get("/:id", (req, res) => {
  const genero = genero_controller.show(req.params.id);
  res.json(genero);
});

router.put("/:id", (req, res) => {
  const genero = req.body;
  const code = genero_controller.update(req.params.id, genero);
  res.status(code).json();
});

router.delete("/:id", (req, res) => {
  genero_controller.destroy(req.params.id);
  res.json();
});

module.exports = router;
