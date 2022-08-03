
const mongoose = require('mongoose')

const IPTaskSchema = mongoose.Schema(
    {   
        text: {

            type: String,
            required: [true, 'Please add a text value']
        },
        
    },
    // {
    //     timestamps: true,
    // }
)

module.exports = mongoose.model('IPTask', IPTaskSchema)