const router = require('express').Router();
let User = require('../models/user.model')

// get all users 
router.route('/').get((req,res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err))
});




// add a user 
router.post("/add", async (req, res) => {
    try {
      let user = new User(req.body);
      let savedUser = await user.save();
      res.json({ msg: "added", user: savedUser });
    } catch (error) {
      res.json({ msg: error});
    }
  });
module.exports = router;
