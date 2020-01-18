const mongoose  = require('mongoose')
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    Name:{
        type: String,
        required: true,
    },
    description: {type: String,  },
    time: {type: Number, },
    date:{type:Date, },
    loc: { 
        type: 
      [Number],
       index: '2dsphere', 
       sparse: true 
      },
    country:{type: String,},
    city:{type: String, },
    free:{type : Boolean},
    Categories:{type: String},
    price:{type: Number},

    // picture:{type: String}
},
{
    timestamps: true,
});
const Exercise = mongoose.model('Event', exerciseSchema);
module.exports = Exercise;
