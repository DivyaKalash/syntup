const { check, validationResult } = require('express-validator');


exports.registerValidator = [
    check('email')
    .isEmail()
    .withMessage('Proper email is required')
    .notEmpty()
    .withMessage('Please enter email'),
    check('name')
    .notEmpty()
    .isLength({max: 20})
    .withMessage('Name is not proper'),
    check('password')
    .notEmpty()
    .withMessage("Password is required")
    .isLength({min: 8})
    .withMessage('Password must be of 8 characters'),
];

exports.loginValidator = [
    check('email')
    .isEmail()
    .withMessage('Please enter email')
    .notEmpty()
    .withMessage('Proper email is required'),
    check('password')
    .notEmpty()
    .withMessage("Password is required")
    .isLength({min: 8})
    .withMessage('Password must be of 8 characters'),

];

exports.resultValidator = (req, res, next) => 
{
    const errors = validationResult(req);
    // console.log(errors.array());
    if(errors.array().length>0)
    {
        return res.status(400).json({
            errors: errors.array()[0].msg
        });
    }
    next();

}