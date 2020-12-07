const Product = require('../models/product');

  async function create(req, res) {
    await Product.findById(req.params.id, (err, product) => {
        product.dupe.push(req.body);
        try {
            product.save();
            res.status(200).json(product);
        } catch (err) {
            res.status(400).json({ err });
        }
    });
}


async function show(req, res) {
  Product.findById(req.params.id)
    .then(product => res.json(product))
    .catch(err => res.status(404).json({ noproductfound: 'No Products found' }));
}

module.exports = {
  create,
  show
}
 