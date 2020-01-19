const mongoose  = require('mongoose')
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    eventName:{
        type: String,
        required: true,
        unique: true,
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
const Event = mongoose.model('Event', eventSchema);
module.exports = Event;
