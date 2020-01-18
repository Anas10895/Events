const mongoose  = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        trim:true,
        minlength:3
    },
    email: {
        type: String,
        required: true,
        unique: true
      },
      phone: {
        type: String,
      },
      password: {
        type: String,
        required: true,
        minlength:6

      },
      role: {
        type: String,
        enum: ["admin", "user", "owner"],
        default: "user",
        required: true
      },
      events: [
        {
          type: Schema.Types.ObjectId,
          ref: "Event"
        }
      ],
},

{
    timestamps: true,
});
const User = mongoose.model('User', userSchema);
module.exports = User;
