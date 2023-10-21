const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
  {
    orderItems: [
      {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        slug: { type: String, required: true },
        price: { type: Number, required: true },
        trial: { type: Boolean },
        pack: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Pack',
          required: true,
        },
      },
    ],

    paymentMethod: { type: String, required: true },
    paymentResult: {
      id: String,
      status: String,
      update_time: String,
      email_address: String,
    },
    packPrice: { type: Number, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    isPaid: { type: Boolean, default: false, required: true },
    paidAt: { type: Date },
    isActive: { type: Boolean, default: false, required: true },
    activatedAt: { type: Date },
    expiresAt: { type: Date },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model('Order', orderSchema);

module.exports = { Order };
