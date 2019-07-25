var express = require('express');
var router = express.Router();
const { Apartment } = require('../models/Apartment');
const { Type } = require('../models/Type');

router.get('/', async function (req, res, next) {
    const apartments = await Apartment.find().select({ name: 1, price: 1, type: 1, rooms: 1, amenities: 1, image: 1 }).exec();
    res.send(apartments);
});

router.get('/:id', async function (req, res, next) {
    const { id } = req.params;
    try {
        const apartment = await Apartment.findById(id).exec();
        res.send(apartment);
    } catch (e) {
        res.status(404).send('not found');
    }
});


router.post('/', async (req, res) => {
   const {name, price, type, rooms, image, amenities} = req.body;
   const apartment = new Apartment({name, price, type, rooms, image, amenities});
   try {
       const document = await apartment.save();
       res.status(200).send(document);
   } catch (e) {
        res.status(400).send(e);
   }
});

module.exports = router;