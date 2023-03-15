import express from 'express';
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
  res.cookie('another_name', 'neato_value', opts);
  res.status(200).send('Hello World!');

})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

// // set up cookie session middleware
// app.use(cookieSession({
//   name: 'user_session',
//   httpOnly: true,
//   sameSite: 'strict',
//   secret: 'somesuperimpressivestringofcharactersnoonewouldpossiblyguessmaybe'
// }))

app.get('/login', (req, res, next) => {
  // Gets the username of the current session via req.session.username
  // // check credentials
  // if (loginSuccess(req.body.username, req.body.password)) {
  //   // set username to the session
  //   req.session.username = req.body.username;
  // }
  console.log(`You're logged in ${req.session.username}!`)
  res.status(200).send(`You're logged in ${req.session.username}!`)
})