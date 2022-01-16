const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  questionId: String, // khoá chính
  question: String, // nội dung câu hỏi
  uploadDocument: String, // dùng để lưu trường hợp câu hỏi dạng tài liệu/ảnh...
  ans1: String, // câu trả lời số 1
  ans2: String, // câu trả lời số 2
  ans3: String, // câu trả lời số 3
  ans4: String, // câu trả lời số 4
  ansCorrect: Number, // câu trả lời đúng
  categoriesMajor: String, // phân loại chính của câu hỏi
  categoriesMinor: String, // phân loại phụ của câu hỏi
}, {
  versionKey: false,
});

module.exports = mongoose.model('question', roomSchema);
