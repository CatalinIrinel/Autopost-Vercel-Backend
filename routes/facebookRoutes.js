const express = require('express');
const dotenv = require('dotenv');
const passport = require('passport');
const { UserSocialMedia } = require('../models/userSocialMedia');
const facebookRouter = express.Router();
const { isAuth } = require('../utils.js');
const expressAsyncHandler = require('express-async-handler');

dotenv.config();

facebookRouter.put(
  '/addAccessToken',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    try {
      const existingUserSocialMedia = await UserSocialMedia.findOne({
        user: req.user._id,
      });

      if (!existingUserSocialMedia) {
        await UserSocialMedia.create({
          user: req.user._id,
          facebook: req.body.pageToken,
        });
      } else {
        existingUserSocialMedia.facebook = req.body.pageToken;
        await existingUserSocialMedia.save();
      }

      return res.send({ message: 'Facebook autentificat cu succes' });
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  })
);
facebookRouter.get(
  '/getAccessToken',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const facebookPageToken = await UserSocialMedia.findOne({
      user: req.user._id,
    });
    res.send(facebookPageToken.facebook);
  })
);

module.exports = { facebookRouter };
