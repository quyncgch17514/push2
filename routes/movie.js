var express = require('express');
const MovieModel = require('../models/MovieModel');
var router = express.Router();

router.get('/', async (req, res) => {
   var movies = await MovieModel.find({});
   res.render('movie/index', { movies : movies });
});

//search function
router.post('/search', async (req, res) => {
   var keyword = req.body.keyword;
   var movies = await MovieModel.find({ title: new RegExp(keyword, "i") })
   res.render('movie/index', { movies: movies })
})

//sort function
router.get('/ascending', async (req, res) => {
   var movies = await MovieModel.find().sort({ duration: 1 })
   res.render('movie/index', { movies: movies })
})

router.get('/descending', async (req, res) => {
   var movies = await MovieModel.find().sort({ duration: -1 })
   res.render('movie/index', { movies: movies })
})

module.exports = router;