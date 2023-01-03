const express = require('express');

const app = express();
const port = 3000;


app.get('/home', (req, res) => {
  res.send('home 페이지 입니다')
})

app.get('/login', (req, res) => {
  res.send('login 페이지 입니다')
})

app.get('/profile', (req, res) => {
  res.send('profile 페이지 입니다')
})


app.listen(port, () => {
    console.log(port, '포트로 서버가 열렸어요!');
});