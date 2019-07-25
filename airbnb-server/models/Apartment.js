const mongoose = require('mongoose');
const {Type} = require('./Type');

const apartmentSchema = mongoose.Schema({
    name: {type:String ,required:true},
    price:{type:Number,min:1,required:true},
    type: {
        type: String,
        required: true,
        // validate: {
        //     async validator(typeName) {
        //         const types = await Types.find().exec();
        //         return types.some(type => type.name === typeName);

        //     },
        //     message: props => `${props.value} is an unknown type`,
        // }
    },
    rooms:{type: Number, min: 1, required: true},
    amenities: {type: [String], required: true},
    image: {type: String, required: true},
});

const Apartment = mongoose.model('Apartment', apartmentSchema);
module.exports = {
    Apartment,
}