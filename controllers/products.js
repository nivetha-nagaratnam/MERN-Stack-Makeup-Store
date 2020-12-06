const Product = require('../models/product');

// function show(req, res) {
//   Product.findById(req.params.id).populate('img').exec(function(err, product) {
//     res.render('products/show', { title: 'Product Detail', product, user: req.user, name: req.query.name});
//   });
// }

// function index(req, res) {
//   Product.find({}).populate('img').exec( function(err, product) {
//     res.render('products/index',{ title: 'All Products', product, user: req.user, name: req.query.name});
//   });
// }

// function indexLips(req, res) {
//   Product.find({category: 'lips'}).populate('img').exec(function(err, product) {
//     res.render('products/lips', { title: 'Lip Products', product, user: req.user, name: req.query.name});
//   });
// }

// function indexFace(req, res) {
//   Product.find({category: 'face'}).populate('img').exec(function(err, product) {
//     res.render('products/face', { title: 'Face Products', product, user: req.user, name: req.query.name});
//   });
// }

// function indexCheeks(req, res) {
//   Product.find({category: 'cheeks'}).populate('img').exec(function(err, product) {
//     res.render('products/cheeks', { title: 'Cheek Products', product, user: req.user, name: req.query.name});
//   });
// }

// function indexEyes(req, res) {
//   Product.find({category: 'eyes'}).populate('img').exec(function(err, product) {
//     res.render('products/eyes', { title: 'Eye Products', product, user: req.user, name: req.query.name});
//   });
// }


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