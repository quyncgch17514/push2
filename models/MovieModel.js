var mongoose = require('mongoose');

var MovieSchema = mongoose.Schema(
   {
      title : String,
      director : String,
      year : Number,
      duration : Number,
      poster: String,
      trailer : String
   }
);

var MovieModel = mongoose.model("Phim", MovieSchema, "movie");
module.exports = MovieModel;