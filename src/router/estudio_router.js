const express = require("express");
const router = express.Router();
const estudio_controller = require("../controllers/estudio_controller.js");

router.post("/", (req, res) => {
  const estudio = req.body;
  const code = estudio_controller.store(estudio);
  res.status(code).json();
});

router.get("/", (req, res) => {
  const estudio = estudio_controller.index();
  res.json(estudio);
});

router.get("/:id", (req, res) => {
  const estudio = estudio_controller.show(req.params.id);
  res.json(estudio);
});

router.put("/:id", (req, res) => {
  const estudio = req.body;
  const code = estudio_controller.update(req.params.id, estudio);
  res.status(code).json();
});

router.delete("/:id", (req, res) => {
  estudio_controller.destroy(req.params.id);
  res.json();
});

module.exports = router;
