const mongoose = require('mongoose');

const packSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    trial: { type: Boolean },
    trialPeriod: { type: Number },
    discount: { type: Number },
    list: [],
  },
  {
    timestamps: true,
  }
);

const Pack = mongoose.model('Pack', packSchema);

module.exports = { Pack };
