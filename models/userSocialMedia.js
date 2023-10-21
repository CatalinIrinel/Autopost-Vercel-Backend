const mongoose = require('mongoose');

const userSocialMediaSchema = new mongoose.Schema({
  facebook: { type: String },
  tiktok: { type: String },
  youtube: { type: String },
  linkedin: { type: String },
  pinterest: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const UserSocialMedia = mongoose.model(
  'UserSocialMedia',
  userSocialMediaSchema
);

module.exports = { UserSocialMedia };
