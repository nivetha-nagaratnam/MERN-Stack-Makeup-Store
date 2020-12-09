const express = require('express');
const router = express.Router();
const dupesCtrl = require('../../controllers/dupes');
const multerInstance = require('../../config/multer')

router.get('/products/:id/dupes/show', dupesCtrl.show);
router.post('/products/:id/dupes', multerInstance.upload.single('image'), dupesCtrl.create);

module.exports = router;