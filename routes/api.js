const router = require("express").Router();
const Article = require("../models/article.js");

router.post("/api/articles", function(req, res) {
  // as long as req.body matches what the model expects, this should insert into the database
  Article.create(req.body)
  .then((item) => {
    res.json(item);
  })
  .catch((err) => {
    // if not, we can at least catch the error
    res.json(err);
  });
});

router.get("/api/articles", function(req, res) {
  // find all products where quantity is greater than zero
  Article.find({})
  .then((item) => {
    res.json(item);
  });
});

router.delete("/api/articles/:id", function(req, res) {
  // find and return a single object based on upc
  Article.remove({
    _id: req.params.id
  })
  .then((item) => {
    res.json(item);
  });
});


module.exports = router;