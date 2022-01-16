const router = require('express').Router();
const accountRoutes = require('./accountRoutes');
const Question = require('../controllers/questionController');

module.exports = (app) => {
  // Create a new question
  router.post('/question', Question.create);

  // Retrieve all Tutorials
  router.get('/question', Question.findAll);

  // add account routes
  accountRoutes(app);

  app.use('/examsimulator', router);
};
