const express = require('express');
const Book = require('../models/book');
const router = express.Router();
// CREATE: Tambah data buku
router.post('/', async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// READ: Ambil semua data buku
router.get('/', async (req, res) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// READ: Ambil detail buku berdasarkan ID
router.get('/:id', async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
        if (!book) return res.status(404).json({ message: 'Book not found' });
        res.json(book);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });
    // UPDATE: Edit data buku
    router.put('/:id', async (req, res) => {
      try {
        const book = await Book.findByPk(req.params.id);
        if (!book) return res.status(404).json({ message: 'Book not found' });
        
        await book.update(req.body);
        res.json(book);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });
    // DELETE: Hapus data buku
    router.delete('/:id', async (req, res) => {
      try {
        const book = await Book.findByPk(req.params.id);
        if (!book) return res.status(404).json({ message: 'Book not found' });
        await book.destroy();

        res.json({ message: 'Book deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  module.exports = router;
  
