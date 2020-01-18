const router = require('express').Router();
let Form = require('../models/form.model')

router.route('/').get((req,res) => {
    Form.find()
    .then(forms => res.json(forms))
    .catch(err => res.status(400).json('Error: ' + err))
});

router.post("/add", async (req, res) => {
  try {
    let form = new Form(req.body);
    let savedForm = await form.save();
    res.json({ msg: "Form added", form: savedForm });
  } catch (error) {
    res.json({ msg: error});
  }
});

module.exports = router;