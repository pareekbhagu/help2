const { check, validationResult, body } = require('express-validator/check');
const { database } = require('./query');
const registerValidations = [
  // username must be an email
  check('email').isEmail(),
  check('firstname').exists(),
  check('lastname').exists(),
  check('password').exists(),
  check('mobile').exists(),
  check('sponsor').exists(),
  check('mobile').isLength({ max: 10 }),
  check('password').isLength({ min: 6 }).withMessage("A password with minimum 6 letters with letters and numbers is recommended."),

  body('email').custom(async value => {
    var email = await database.query("select * from users where email = ?", [value], 1)
    if (email.length !== 0) {
      return Promise.reject('E-mail already in use');
    }

  }),
  body('mobile').custom(async value => {
    var mobile = await database.query("select * from users where mobile = ?", [value], 1)
    if (mobile.length !== 0) {
      return Promise.reject('Mobile already in use');
    }

  }),
]

getRandomUser = () => {


  // Declare a digits variable  
  // which stores all digits 
  var digits = '0123456789';
  let OTP = '';
  for (let i = 0; i < 7; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  return 'H' + OTP;
}
generateUser2 = async () => {
  var random = getRandomUser();
  var check = await database.query('select user_name from users where user_name=?', [random], 1)

  if (check.length == 0) return random;
  else var a = await generateUser();
  return a;
}

generateUser = async () => {
  var random = getRandomUser();
  random = 78566

  var check = await database.query('select user_name from users where user_name=?', [random], 1)

  if (check.length == 0) return random;
  else var a = await generateUser2();
  return a;
}

rowtojson = function (data) { // TE stands for Throw Error
  return JSON.parse(JSON.stringify(data))
};

module.exports = { registerValidations, generateUser, getRandomUser, rowtojson }