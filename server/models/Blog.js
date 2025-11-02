
const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      default: 'Anonymous',
    },
    image: {
      type: String,
      default: 'default-blog.jpg',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Blog', blogSchema);
