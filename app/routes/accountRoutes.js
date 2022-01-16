const router = require('express').Router();
const { body } = require('express-validator');
const Account = require('../controllers/accountController');

module.exports = (app) => {
  // Create a new account
  router.post(
    '/account',
    body('username')
      .notEmpty()
      .withMessage('username cannot be blank'),
    body('duration')
      .isDate()
      .withMessage('duration invalidate'),
    body('role')
      .isNumeric()
      .withMessage('role invalidate'),
    Account.create,
  );

  // Get all account
  router.get('/account', Account.findAll);

  // delete account by ids
  router.delete(
    '/account',
    body('ids')
      .isArray()
      .withMessage('ids is an array of string'),
    Account.delete,
  );

  // update account by id
  router.put(
    '/account/:accountId',
    body('username')
      .notEmpty()
      .withMessage('username cannot be blank'),
    body('duration')
      .isDate()
      .withMessage('duration invalidate'),
    body('role')
      .isNumeric()
      .withMessage('role invalidate'),
    Account.update,
  );

  app.use('/examsimulator', router);
};
