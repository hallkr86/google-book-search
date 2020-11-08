const router = express.Router();
const express = require("express");
const db = require("../models");

router.get("/api/books", (req,res) => {
    db.Books.find({})
    .then((found) => {
        res.json(found);
    });
});

router.post("/api/books", (req, res) => {
    const newBook = {
      title: req.body.title,
      authors: req.body.authors,
      description: req.body.description,
      image: req.body.image,
      link: req.body.link,
    };
    db.Books.create(newBook)
    .then((newby) => {
        res.json(newby);
    });
  });
  
router.delete("/api/books/:id", (req, res) => {
    db.Books.findByIdAndDelete(req.params.id)
    .then((deleted) => {
        res.json(deleted);
    });
});
    
module.exports = router;