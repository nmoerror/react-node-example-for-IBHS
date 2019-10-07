const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const auth = require('../../middleware/auth');
const Dmin = require('../../models/Dmin');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

// @route   Get API/auth
// @desc    Test route
// @access  Public
router.get('/', auth, async (req, res) => {
  try {
    const dmin = await Dmin.findById(req.dmin.id).select('-password');
    res.json(dmin);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//@route    POST api/auth
//@Desc     Authenticate & get token
//@access   Public
router.post(
  '/',
  [
    check('email', 'Please include a valid Email').isEmail(),
    check('password', 'Password is Required').exists()
  ],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    //See if acc exists
    try {
      let dmin = await Dmin.findOne({
        email
      });
      if (!dmin) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      const ismatch = await bcrypt.compare(password, dmin.password);
      if (!ismatch) {
        return res.status(400).json({
          errors: [{ msg: 'Invalid Credentials' }]
        });
      }

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

module.exports = router;
