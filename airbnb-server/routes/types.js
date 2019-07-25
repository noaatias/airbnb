var express = require('express');
var router = express.Router();
const { Type } = require('../models/Type');

router.get('/', async function (req, res, next) {
    const types = await Type.find().select({ _id: 0 }).exec();
    res.send(types);
});

module.exports = router;