var express = require ('express');
var app = express();

app.use(express.static('public'));

app.listen(5055,function(){
  console.log('listening to port 5055');
});
