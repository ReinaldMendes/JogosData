const express = require("express");
const router = express.Router();
const publicadora_controller = require("../controllers/publicadora_controller.js");

router.post("/", (req, res) => {
  const publicadora = req.body;
  const code = publicadora_controller.store(publicadora);
  res.status(code).json();
});

router.get("/", (req, res) => {
  const publicadora = publicadora_controller.index();
  res.json(publicadora);
});

router.get("/:id", (req, res) => {
  const publicadora = publicadora_controller.show(req.params.id);
  res.json(publicadora);
});

router.put("/:id", (req, res) => {
  const publicadora = req.body;
  const code = publicadora_controller.update(req.params.id, publicadora);
  res.status(code).json();
});

router.delete("/:id", (req, res) => {
  publicadora_controller.destroy(req.params.id);
  res.json();
});

module.exports = router;
