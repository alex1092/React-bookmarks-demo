var express = require('express')
var router = express.Router()

const bookmarks = [
  { title: "google", url: "https://google.com", description: "cool new search engine" },
  { title: "facebook", url: "https://facebook.com", description: "cool new social media site" }
]

/* GET users listing. */
router.get('/', function (req, res) {
  res.send(bookmarks)
})

router.post('/', function (req, res) {
 bookmarks.push(req.body)
 res.sendStatus(201)
})

module.exports = router
