const express = require('express');
const app = express();

app.use(express.static('dist'));

app.listen(80, () => {
  console.log('Сервер запущен на порту 80');
});
