const Question = require('../models/question');

// Create and Save a new Room
module.exports = {
  create: (req, res) => {
    // Create a Room
    const question = new Question({
      ...req.body,
    });

    // Save question in the database
    Question
      .save(question)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || 'Some error occurred while creating the question.',
        });
      });
  },

  findAll: (req, res) => {
    // get all question
    // Question.find({}
    //   .then((data) => {
    //     res.send(data);
    //   })
    //   .catch((err) => {
    //     res.status(500).send({
    //       message: err.message || 'Some error occurred while creating the question.',
    //     });
    //   });
    res.send('Toi nay ban da an gi chua?');
  },
};
