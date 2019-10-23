import Mercury from "@postlight/mercury-parser";
import express from 'express';
const app = express();
const defaultPort = 3000;
const port = process.env.PORT || defaultPort;

app.get('/', (req, res) => {
  if (req.query.url ) {
    console.log(`Requested: ${req.query.url}`);
    Mercury.parse(req.query.url).then(result => res.send(result));
  } else {
    res.send('No URL sent');
  }
})
app.get('/content', (req, res) => {
  console.log(`Content requested: ${req.query.url}`);
  Mercury.parse(req.query.url).then(result => res.send(result.content));
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
