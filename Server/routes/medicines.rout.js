const express = require('express');
const Medicine = require('../Database/models/Medicine');

const router = express.Router();

router.post('/', async (req, res) => {
  const { name, quantity, expiryDate, price } = req.body;
  const medicine = new Medicine({ name, quantity, expiryDate, price });
  await medicine.save();
  res.status(201).json(medicine);
});

router.get('/', async (req, res) => {
  const medicines = await Medicine.find({});
  res.json(medicines);
});

router.put('/:id', async (req, res) => {
  const { name, quantity, expiryDate, price } = req.body;
  const medicine = await Medicine.findByIdAndUpdate(req.params.id, { name, quantity, expiryDate, price }, { new: true });
  res.json(medicine);
});

router.delete('/:id', async (req, res) => {
  await Medicine.findByIdAndDelete(req.params.id);
  res.json({ message: 'Medicine deleted' });
});

module.exports = router;
