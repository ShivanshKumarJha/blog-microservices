const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const commentsByPostId = {};

app.get('/posts/:id/comments', (req, res) => {});

app.post('/posts/:id/comments', (req, res) => {
  const commentId = randomBytes(4).toString('hex');
  const postId = req.params.id;
  const { content } = req.body;

  const comments = commentsByPostId[postId] || [];

  comments.push({ id: commentId, content });
});

app.listen(4001, () => {
  console.log('Listening on port 4001');
});
