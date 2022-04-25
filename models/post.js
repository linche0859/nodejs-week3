const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    userName: { type: String, required: [true, '發文者名稱必填'] },
    userPhoto: { type: String, required: [true, '發文者照片必填'] },
    content: { type: String, required: [true, '貼文內容必填'] },
    liked: { type: Boolean, default: false },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model('Post', schema);
