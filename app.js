import express from 'express';
import cookieParser from 'cookie-parser';
const app = express();
const port = 8080;
const myIdData = [1, 2, 3];

app.get('/', (req, res) => {
  var opts = {
    name: 'user_session',
    httpOnly: true,
    sameSite: 'strict',
    secret: 'somesuperimpressivestringofcharactersnoonewouldpossiblyguessmaybe'
  };
  res.cookie('session', 'neato_value', opts);;
  res.status(200).send(`Navigate to /login?name=YOUR_NAME`);

})

app.use(cookieParser());

app.get('/login', (req, res) => {
  let name = req.query.name;
  var opts = {
    maxAge: 900000,
    httpOnly: true,
    sameSite: 'strict'
  };

  res.cookie('name', name, opts);
  res.status(200).send(`You're logged in! Navigate to /hello`)
})

app.get('/hello', (req, res) => {
  let name = req.cookies.name;
  res.send(`Welcome ${name}`);
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))