const express = require('express');

const mailRouter = express.Router();

//send email at contact

let transporter = nodemailer.createTransport({
  host: process.env.HOST_EMAIL,
  port: process.env.PORT_EMAIL,
  secure: true,
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.PASS_EMAIL,
  },
});

// verify connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take our messages');
  }
});

const payOrderEmailTemplate = (order) => {
  return `<h1>Thanks for shopping with us</h1>
    <p>
    Hi ${order.user.name},</p>
    <p>We have finished processing your order.</p>
    <h2>[Order ${order._id}] (${order.createdAt
    .toString()
    .substring(0, 10)})</h2>
    <table>
    <thead>
    <tr>
    <td><strong>Product</strong></td>
    <td><strong>Quantity</strong></td>
    <td><strong align="right">Price</strong></td>
    </thead>
    <tbody>
    ${order.orderItems
      .map(
        (item) => `
      <tr>
      <td>${item.name}</td>
      <td align="center">${item.quantity}</td>
      <td align="right"> $${item.price.toFixed(2)}</td>
      </tr>
    `
      )
      .join('\n')}
    </tbody>
    <tfoot>
    <tr>
    <td colspan="2">Items Price:</td>
    <td align="right"> $${order.itemsPrice.toFixed(2)}</td>
    </tr>
    <tr>
    <td colspan="2">Shipping Price:</td>
    <td align="right"> $${order.shippingPrice.toFixed(2)}</td>
    </tr>
    <tr>
    <td colspan="2"><strong>Total Price:</strong></td>
    <td align="right"><strong> $${order.totalPrice.toFixed(2)}</strong></td>
    </tr>
    <tr>
    <td colspan="2">Payment Method:</td>
    <td align="right">${order.paymentMethod}</td>
    </tr>
    </table>
    <h2>Shipping address</h2>
    <p>
    ${order.shippingAddress.fullName},<br/>
    ${order.shippingAddress.address},<br/>
    ${order.shippingAddress.city},<br/>
    ${order.shippingAddress.country},<br/>
    ${order.shippingAddress.postalCode}<br/>
    </p>
    <hr/>
    <p>
    Thanks for shopping with us.
    </p>
    `;
};

mailRouter.post('/send-mail', cors(), async (req, res) => {
  let mail = {
    from: req.body.email,
    to: process.env.USER_EMAIL,
    subject: `${req.body.name} ne contacteaza in legatura cu ${req.body.issue}`,
    text: req.body.message,
  };
  await transporter.sendMail(mail);
});

exports.exports = { mailRouter, payOrderEmailTemplate };
