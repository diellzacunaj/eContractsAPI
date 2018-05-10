// ==== Using packages ====
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors=require('cors');


// ==== Getting Contract Model(Schema) ====
const Contract = require('./models/Contract.js');


const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use(cors());

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/eContracts', {useMongoClient: true})
  .then(function() {
     console.log('Successfully connected to MongoDB!')
  }).catch(function(err) {
     console.error(err)
  });



/* INDEX */
app.get('/', function(req, res, next) {
   res.send("Welcome to eContracts API");
});

/* GET ALL Contracts */
app.get('/contract', function(req, res) {

   Contract.find({}, (err, results) => {
     if(err) {
       res.json({
         confirmation: 'fail',
         err: err.message
       })
     } else {
       res.json({
         confirmation: 'success',
         data: results
       })
     }
   })
});

/* Insert Contract */
app.post('/contract', function(req, res) {
	console.log("CREATE");
   Contract.create(req.body, (err, result) => {
    if(err) {
      res.json({
        confirmation: 'fail',
        err: err.message
      })
    } else {
      res.json({
        confirmation: 'success',
        data: result
      })
    }
   })
});

/* GET Contract */
app.get('/contract/:id', function(req, res) {
  Contract.findById(req.params.id, (err, result) => {
    if(err) {
      res.json({
        confirmation: 'fail',
        err: err.message
      })
    } else {
      res.json({
        confirmation: 'success',
        data: result
      })
    }
  })
});

/* UPDATE Contract */
app.put('/contract/update/:id', function(req, res) {
  Contract.updateOne({_id: req.params.id}, req.body, (err, result) => {
    if(err) {
      res.json({
        confirmation: 'fail',
        err: err.message
      })
    } else {
      res.json({
        confirmation: 'success',
        data: result
      })
    }
  })
});

/* DELETE Contract */
app.delete('/contract/delete/:id', function(req, res) {
   Contract.deleteOne({_id: req.params.id}, (err, result)=> {
     if(err) {
      res.json({
        confirmation: 'fail',
        err: err.message
      })
    } else {
      res.json({
        confirmation: 'success',
        data: result
      })
    }
   })
});

// ==== Run Application ====
app.listen(4000, () => {
  console.log('Express server is running at http://127.0.0.1:4000');
});
