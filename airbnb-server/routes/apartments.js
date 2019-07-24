var express = require('express');
var router = express.Router();
const { Apartment } = require('../models/Apartment');
const { Type } = require('../models/Type');

router.get('/', async function (req, res, next) {
    const apartments = await Apartment.find().select({ name: 1, price: 1, type: 1, rooms: 1, amenities: 1, image: 1 }).exec();
    res.send(apartments);
});

// router.get('/:id', async function (req, res, next) {
//     const { id } = req.params;
//     try {
//         const movie = await Movie.findById(id).exec();
//         res.send(movie);
//     } catch (e) {
//         res.status(404).send('not found');
//     }
// });


// router.post('/', async (req, res) => {
//    const {name, year, actors, genre, image, video} = req.body;
//    const movie = new Movie({name, year, actors, genre, image, video});
//    try {
//        const document = await movie.save();
//        res.status(200).send(document);
//    } catch (e) {
//         res.status(400).send(e);
//    }
// });

module.exports = router;