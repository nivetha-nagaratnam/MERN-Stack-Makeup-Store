const Product = require('../models/product');

  async function create(req, res) {
    await Product.findById(req.params.id, (err, product) => {
        product.review.push(req.body);
        try {
            product.save();
            res.status(200).json(product);
        } catch (err) {
            res.status(400).json({ err });
        }
    });
}

module.exports = {
  create,
}
 