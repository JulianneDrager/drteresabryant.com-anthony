const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/:id', adminController.getAdminById);
router.post('/createAdmin', adminController.createAdmin);

module.exports = router;