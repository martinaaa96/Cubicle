const mongoose = require('mongoose');
//const Cube = require('./Cube_old');

const cubeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    description: {
        type: String,
        required: true,
        maxLenght: 50,
        //check real length 

    },
    imageUrl: {
        type: String,
        required: true,
        //add http/https valid
       // match: /^https?:\/\//,
       validate:{
        validator:function(value){
            return value.startsWith('http://') || value.startsWith('https://') ;

        },
        message: 'URL is  invalid'
       }
    },
    difficultyLevel: {
        type: Number,
        required: true,
        max: 6,
        min: 1,
    },
    accessories: [{
        type: mongoose.Types.ObjectId,
        ref: 'Accessory'

    }]
});


const Cube = mongoose.model('Cube', cubeSchema)

module.exports = Cube;
