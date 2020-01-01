const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

var PostSchema = mongoose.Schema({
  title: String,
  body: String,
});

var Post = mongoose.model('Post', PostSchema);

dotenv.config();

const app = express();
app.set('view engine', 'pug');
app.use(express.static('views'));

app.route('/').get((req, res) => {
  res.render('index', { title: 'Hey', message: 'Hello there!!' });
})

app.route('/mongo').get(async (req, res) => {
  try {
    const post = await Post.create({
      title: 'hola',
      body: 'soy un body'
    });
    res.status(200).json({ response: 'ok', post });
  } catch (error) {
    res.status(500).json(error);
  }
})


// mongoose.connect(process.env.MONGO_DB).then(() => {
//   console.log('db connected')
app.listen(process.env.PORT || 3000);
// }).catch(err => {
//   console.log(err);
// })