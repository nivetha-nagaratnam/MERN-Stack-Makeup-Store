const express = require('express');
const router = express.Router();
const productsCtrl = require('../../controllers/products');

/*---------- Protected Routes ----------*/
router.use(require('../../config/auth'));

router.get('/', checkAuth, productsCtrl.index)
router.get('/lips',checkAuth, productsCtrl.indexLips)
router.get('/eyes',checkAuth, productsCtrl.indexEyes)
router.get('/face', checkAuth, productsCtrl.indexFace)
router.get('/cheeks', checkAuth, productsCtrl.indexCheeks)
router.get('/:id', productsCtrl.show);
router.post('/', productsCtrl.create);
router.delete('/:id', productsCtrl.delete);

/*----- Helper Functions -----*/
function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
  }
  

module.exports = router;