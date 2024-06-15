const mongoose = require("mongoose");

// const ReviewSchema = mongoose.Schema({
//   rating: {
//     type: Number,
//   },
//   description: {
//     type: String,
//   },
//   userName: {
//     type: String,
//     required: true,
//   },
//   postId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Review",
//     required: true,
//   },
// });

const ReviewSchema = new mongoose.Schema({
  rating: {
    type: Number,
  },
  description: {
    type: String,
  },
  userName: {
    type: String,
    required: true,
  },
  postId: {
    type: String,
    required: true,
  },
});

const Review = mongoose.model("Review", ReviewSchema);

module.exports = Review;
