const express = require('express');
const app = express();
app.use(express.json());
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    console.error(err);
    return res.status(400).send({ error: 'Invalid JSON body' });
  }
  next();
});
app.post('/user', (req, res) => {
  if (Object.keys(req.body).length === 0) {
    return res.status(400).send({ error: 'Empty JSON body' });
  }
  console.log(req.body);
  res.send('User created');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});