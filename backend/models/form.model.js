const mongoose  = require('mongoose')
const Schema = mongoose.Schema;

const formSchema = new Schema({
    fullName:{
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
      },
      phone: {
        type: String,
        required: true,
        unique: true
      },


     picture:{type: String, },

    date:{type:Date, },
    country:{type: String,},
    city:{type: String, },
    position:{type: String,},
    gender:{
        type: String,
        enum: ["Male", "Female"],
       },
    notes:{type: String,}

},
{
    timestamps: true,
});
const Form = mongoose.model('Form', formSchema);
module.exports = Form;
