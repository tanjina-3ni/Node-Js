const express = require('express');

const path = require('path');

const app = express();

const bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({ extended: true });

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log('Application started and Listening on port 3000');
});

// serve your css as static
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.render(__dirname+'/index.html');
});

app.get('/registration', (req, res) => {
    response = {
        first_name: req.query.yourname,
        email : req.query.youremail,
    };
    console.log(response);
    //res.end(JSON.stringify(response));
    res.sendFile(__dirname+'/registration.html');
});

app.post('/registration/registration2', urlencodedParser, (req, res) => {
    // Prepare output in JSON format
    response = {
        first_name: req.body.firstname,
        last_name: req.body.lastname,
        email : req.body.email,
    };
    //console.log(response);
    //res.end(JSON.stringify(response));
    res.render(__dirname+'/views/registration2.ejs',response);
});

