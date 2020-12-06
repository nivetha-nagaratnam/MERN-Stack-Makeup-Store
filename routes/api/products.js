const express = require('express');
const router = express.Router();
const productsCtrl = require('../../controllers/products');

router.get('/', productsCtrl.index)
router.get('/lips',productsCtrl.indexLips)
router.get('/eyes',productsCtrl.indexEyes)
router.get('/face',productsCtrl.indexFace)
router.get('/cheeks',productsCtrl.indexCheeks)
router.get('/:id', productsCtrl.show);
router.post('/', productsCtrl.create);
router.delete('/:id', productsCtrl.delete);

module.exports = router;