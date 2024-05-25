const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BasketSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  basketType: { type: String, required: true },
  stocks: [
    {
      name: { type: String, required: true },
      quantity: { type: Number, required: true },
    },
  ],
});

const Basket = mongoose.model("Basket", BasketSchema);
module.exports = Basket;
