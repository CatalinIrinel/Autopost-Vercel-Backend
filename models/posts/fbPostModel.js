const mongoose = require('mongoose');

const fbPostSchema = new mongoose.Schema(
  {
    text: { type: String },
    image: { type: String },
    images: [],
    link: { type: String },
    accessToken: {},
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  },
  {
    timestamps: true,
  }
);

const FacebookPost = mongoose.model('Facebook', fbPostSchema);

module.exports = { FacebookPost };
