// require mongoose in schema file
const mongoose = require('mongoose');

const functionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'input algorithm name']
    },
    value: {
        type: String,
        required: [true, 'please input algorithm function']
    }
},
{
    timestamps: true
});

// mongoose model instance of meme schema
const Function = mongoose.model('Function', functionSchema);
// export the meme schema
module.exports = Function;