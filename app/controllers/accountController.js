const { v4: uuidv4 } = require('uuid');
const { validationResult } = require('express-validator');
const Account = require('../models/account');

module.exports = {
  // Create a Account
  create: (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    } else {
      const account = new Account({
        ...req.body,
        accountId: uuidv4(),
        password: 'abcd1234',
      });

      try {
        Account
          .create(account)
          .then((data) => {
            res.send(data);
          })
          .catch((err) => {
            res.status(500).send({
              message: err.message || 'Some error occurred while creating the account.',
            });
          });
      } catch (error) {
        res.send(error);
      }
    }
  },

  // Get all Account
  findAll: (req, res) => {
    Account.find()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || 'Some error occurred while creating the account.',
        });
      });
  },

  // Get Account by id
  findById: (req, res) => {
    Account.find({ accountId: req.params.accountId })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || 'Some error occurred while creating the account.',
        });
      });
  },

  update: async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    } else {
      try {
        const doc = await Account.findOneAndUpdate(
          {
            accountId: req.params.accountId,
          },
          {
            username: req.body.username,
            duration: req.body.duration,
            role: req.body.role,
            password: req.body.password,
          },
          {
            upsert: true,
            useFindAndModify: false,
          },
        );
        res.send(doc);
      } catch (error) {
        res.send(error);
      }
    }
  },

  delete: (req, res) => {
    const { ids } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    } else {
      Account.deleteMany({ accountId: { $in: ids } })
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
          res.status(500).send({
            message:
              err.message || 'Some error occurred while creating the account.',
          });
        });
    }
  },
};
