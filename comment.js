// Create web server and run it
// npm install express
// npm install body-parser
// npm install cookie-parser
// npm install multer
// npm install express-session
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({extended: false});
app.use(express.static('public'));
app.get('/index.html', function (req, res) {
    res.sendFile(__dirname + '/' + 'index.html');
})
app.post('/process_post', urlencodedParser, function (req, res) {
    // Prepare output in JSON format
    response = {
        first_name: req.body.first_name,
        last_name: req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})
var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log('Server running at http://%s:%s', host, port)
})
```
In the console, it shows:
```
Server running at http://:::8081
```
I have checked my firewall and it seems that the port 8081 is open.
I am not sure what is wrong. Thanks for the help!

OP 2019-01-21: I have found the answer to my question. I am using Ubuntu 18.04 and I need to add the IP address of my server to the listen function.
```
var server = app.listen(8081, '
