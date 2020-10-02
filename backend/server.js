const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const cloth_measurementRoutes = express.Router();
const PORT = 4000;

let Cloth_measurement = require('./cloth_measurement_model');
let cloth_coat = require('./cloth_coat_model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/Cloth_measurement', {useNewUrlParser: true});
const connection = mongoose.connection;

connection.once('open', function () {
    console.log("MongoDB database connection established successfully");
})

cloth_measurementRoutes.route('/').get(function (req, res) {
    Cloth_measurement.find(function (err, cloth_measurement) {
        if (err) {
            console.log(err);
        } else {
            res.json(cloth_measurement);
        }
    });
});

cloth_measurementRoutes.route('/:id').get(function (req, res) {
    let id = req.params.id;
    Cloth_measurement.findById(id, function (err, cloth_measurement) {
        res.json(cloth_measurement);
    });
});

cloth_measurementRoutes.route('/update/:id').post(function (req, res) {
    Cloth_measurement.findById(req.params.id, function (err, cloth_measurement) {
        if (!cloth_measurement)
            res.status(404).send("data is not found");
        else
            cloth_measurement.chest_circumference = req.body.chest_circumference;
        cloth_measurement.shoulder_type = req.body.shoulder_type;

        cloth_measurement.save().then(cloth_measurement => {
            res.json('Cloth_measurement updated!');
        })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

cloth_measurementRoutes.route('/addCoat').post(function (req, res) {
    let coatData = new cloth_coat(req.body);
    coatData.save()
        .then(data => {
            res.status(200).json({'Coat Measurement': 'Coat Measurement added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new Coat Measurement failed');
        });
});

app.use('/cloth_measurement', cloth_measurementRoutes);

app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
});