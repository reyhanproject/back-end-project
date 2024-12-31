const express = require("express");
const Contacts = require("../models/contacts");
const router = express.Router();

router.post("/contact", async (req, res) => {
  const {name, email, message} = req.body
  try {
    const contacs = await Contacts.create({name, email, message});
    res.status(201).json(contacs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/contacts", async (req, res) => {
  try {
    const contacs = await Contacts.findAll();
    res.json(contacs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const contacs = await Contacts.findByPk(req.params.id);
    if (!contacs) return res.status(404).json({ message: "Contacs not found" });
    res.json(contacs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const contacs = await Contacts.findByPk(req.params.id);
    if (!contacs) return res.status(404).json({ message: "Contacs not found" });

    await contacs.update(req.body);
    res.json(contacs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const contacs = await Contacts.findByPk(req.params.id);
    if (!contacs) return res.status(404).json({ message: "Contacs not found" });
    await contacs.destroy();

    res.json({ message: "Contacs deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
