const express = require('express');
const router = express.Router();
const dupesCtrl = require('../../controllers/dupes');

router.get('/products/:id/dupes/show', dupesCtrl.show);
router.post('/products/:id/dupes', dupesCtrl.create);

module.exports = router;