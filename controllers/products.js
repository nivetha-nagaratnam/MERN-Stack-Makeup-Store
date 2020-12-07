const Product = require('../models/product');

async function create(req, res) {
  Product.create(req.body)
    .then(product => res.json())
    .catch(err => res.status(400).json());
}

async function index(req, res) {
  Product.find()
    .then(products => res.json(products))
    .catch(err => res.status(404).json({ noproductsfound: 'No Products found' }));
}

async function indexLips(req, res) {
  Product.find({category: 'lips'})
    .then(products => res.json(products))
    .catch(err => res.status(404).json({ noproductsfound: 'No Products found' }));
}

async function indexFace(req, res) {
  Product.find({category: 'face'})
    .then(products => res.json(products))
    .catch(err => res.status(404).json({ noproductsfound: 'No Products found' }));
}

async function indexCheeks(req, res) {
  Product.find({category: 'cheeks'})
    .then(products => res.json(products))
    .catch(err => res.status(404).json({ noproductsfound: 'No Products found' }));
}

async function indexEyes(req, res) {
  Product.find({category: 'eyes'})
    .then(products => res.json(products))
    .catch(err => res.status(404).json({ noproductsfound: 'No Products found' }));
}

async function show(req, res) {
  Product.findById(req.params.id)
    .then(product => res.json(product))
    .catch(err => res.status(404).json({ noproductfound: 'No Product found' }));
}

async function deleteProduct(req, res) {
  Product.findByIdAndRemove(req.params.id, req.body)
   .then(product => res.json({ mgs: 'Product deleted successfully' }))
   .catch(err => res.status(404).json({ error: 'No product' }));
}

module.exports = {
  create,
  index,
  show,
  delete:deleteProduct,
  indexLips,
  indexCheeks,
  indexEyes,
  indexFace,
};