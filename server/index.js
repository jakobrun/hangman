var express = require('express'),
    app = express();

app.use(express.static('client'));

app.listen(process.env.PORT || 3000);