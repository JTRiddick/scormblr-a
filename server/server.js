var express = require ('express');
var app = express();

app.use(express.static('public'));

var port = process.env.PORT || 5055;

app.listen(port,function(){
  console.log('listening to port ' + port);
});
