var express = require('express'),
    app = express();

app.use(express.static('client'));

var port = process.env.PORT || 3000
console.log('listen on port', port);
app.listen(port);