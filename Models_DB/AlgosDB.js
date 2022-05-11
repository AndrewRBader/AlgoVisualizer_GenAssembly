// require mongoose in schema file
const mongoose = require('mongoose');

//basic algorithmJS schema:

const algorithmJSSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'input algorithm name']
    },
    image: {
        type: String,
        required: [true, 'please input algorithm image URL']
    },
    description: {
        type: String,
        required: [true, 'please input description of the algorithm']
    }
},
{
    timestamps: true
});

// mongoose model instance of meme schema
const AlgorithmJS = mongoose.model('AlgorithmJS', algorithmJSSchema);
// export the meme schema
module.exports = AlgorithmJS;