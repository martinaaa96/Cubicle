const mongoose = require('mongoose');
const accessorySchema = new mongoose.Schema({
   
    name: {
        type: String,
        required: true,

    },
    imageUrl:{
        type: String,
        required: true,
        
    },
    description:{
        type: String,
        required: true,
        maxLenght: 50
    },

});

const Accessory = mongoose.model('Accessory',accessorySchema);

model.exports = Accessory;
