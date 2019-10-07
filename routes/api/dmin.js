const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
//Mongo Db model
const Dmin = require('../../models/Dmin');

// @route   POST API/dmin
// @desc    Register dmin
// @access  Public
router.post(
  '/',
  [
    check('name', 'Name is Required')
      .not()
      .isEmpty(),
    check('surname', 'Last Name is Required')
      .not()
      .isEmpty(),
    check('email', 'Please include a valid Email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({
      min: 6
    })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, surname, email, password, phone } = req.body;
    //See if acc exists
    try {
      let dmin = await Dmin.findOne({
        email
      });
      if (dmin) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Acc Already Exists' }] });
      }

      dmin = new Dmin({
        name,
        surname,
        email,
        password,
        phone
      });
      //Encrypt password
      const salt = await bcrypt.genSalt(12);

      dmin.password = await bcrypt.hash(password, salt);
      await dmin.save();

      //Return jsonwebtoken
      const payload = {
        dmin: {
          id: dmin.id
        }
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

router.get('/', auth, async (req, res) => {
  try {
    let dmins = await Dmin.find();
    res.json(dmins);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
