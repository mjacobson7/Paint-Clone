const express = require('express');
const app = express();

app.use('/', express.static('../public'));

app.listen(7575, function () {
  console.log('Example app listening on port 7575!')
})
