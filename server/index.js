var magatamaSchema = require('./magatamas/magatama-model')
var mongoose = require("mongoose");

//makes an express server ho use the backend called app
const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
var port = 4000;
var mongoDBUrl = 'mongodb://127.0.0.1:27017/Magatamas'
const router = express.Router();
const magatamaRouter = require('./route/magatama-router')
const magatamaModel = require('./magatamas/magatama-model')
const skillModel = require('./magatamas/skill-model')
const magatamaCtrl = require('./controllers/magatama-ctrl')

mongoose
    .connect(mongoDBUrl, { useUnifiedTopology: true, useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const connection = mongoose.connection;

connection.once("open", function() {
    console.log("MongoDB database connection established successfully");
});

app.use('/api', magatamaRouter)
app.use('/test', magatamaRouter)
app.use('/help', magatamaCtrl.getMagatamas)
app.get('/test', (req, res) => {
    res.send('Hello World! 2')
})
app.use(cors())
app.use(bodyParser.json())

app.listen(port, function() {
    console.log("Server is running on Port: " + port);
});


app.get('/', (req, res) => {
    res.send('Hello World!')
})



/*

magatamaRouter.route("/Magatamas").get(function(req, res) {
    magatamaCtrl.getMagatamas({}, function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

router.route("/fetch").get(function(req, res) {
    magatamaSchema.find({}, function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
});
*/