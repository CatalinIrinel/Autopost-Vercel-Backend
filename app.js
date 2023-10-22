const express = require('express');
const dotenv = require('dotenv');
const http = require('http');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const session = require('express-session');

//routes
const { uploadRouter } = require('./routes/uploadRoutes.js');
// const { seedRouter } = require('./routes/seedRoutes.js');
const { userRouter } = require('./routes/userRoutes.js');
// const { tiktokRouter } = require('./routes/tiktokRoutes.js');
const { facebookRouter } = require('./routes/facebookRoutes.js');
// const { linkedInRouter } = require('./routes/linkedInRoutes.js');
// const { pinterestRouter } = require('./routes/pinterestRoutes.js');
// const { youtubeRouter } = require('./routes/youtubeRoutes.js');

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

let server = http.createServer(app);

mongoose.set('strictQuery', true);
mongoose
  .connect(`${process.env.MONGO_URI}`)
  .then(() => {
    console.log('Connected to DB');
    server.listen(port, () => {
      console.log(`Merge backend-ul acuma pe port-ul ${port}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.JWT_SECRET,
    resave: true,
    saveUninitialized: true,
  })
);

const corsOptions = {
  origin: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  exposedHeaders: ['x-auth-token'],
};
app.use(cors(corsOptions));

// routes
// app.use('/api/seed', seedRouter);
app.use('/api/upload', uploadRouter);
app.use('/api/users', userRouter);
app.use('/api/facebook', facebookRouter);

// end of routes

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.get('/', (req, res) => {
  res.send('this works i hope');
});
