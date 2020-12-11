// got this from https://www.wrappixel.com/building-a-shopping-cart-in-nodejs/
const Cart = require("../models/cart");
exports.cart = async () => {
    const carts = await Cart.find().populate({
        path: "items.productId",
        select: "name price total"
    });;
    return carts[0];
};
exports.addItem = async payload => {
    const newItem = await Cart.create(payload);
    return newItem
}