const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false, required: true },
    subscription: {
      trialStart: { type: Date },
      trialEnd: { type: Date },
      subStart: { type: Date },
      subEnd: { type: Date },
      isPaid: { type: Boolean },
    },
    pack: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Pack',
    },
  },
  {
    timestamps: true,
  }
);

//Forgot password for users

// userSchema.methods.getResetPasswordToken = function () {
//   const resetToken = crypto.randomBytes(20).toString('hex')

//   // hash token and set to resetPass
//   this.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex')

//   // set to expire
//   this.resetPasswordExpire = Date.now() + 10*60*1000
//   return resetToken;
// }
const User = mongoose.model('User', userSchema);
module.exports = { User };
