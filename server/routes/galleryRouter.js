const express = require('express');
const router = express.Router();
const galleryController = require('../controllers/galleryController');

router.post('/upload', galleryController);
router.put('/edit/:id', galleryController);

module.exports = router;