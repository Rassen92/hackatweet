var express = require("express");
const Tweet = require("../models/tweets");
var router = express.Router();

router.get("/", (req, res) => {
  Tweet.find({}).then((data) => {
    res.json({
      allTweets: data,
    });
  });
});

router.post("/", (req, res) => {
  const newTweet = new Tweet({
    firstname: req.body.firstname,
    username: req.body.username,
    date: Date.now(),
    content: req.body.content,
  });
  newTweet.save().then(
    Tweet.find({}).then((data) => {
      res.json({
        allTweets: data,
      });
    })
  );
});

module.exports = router;
