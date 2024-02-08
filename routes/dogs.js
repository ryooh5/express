var express = require("express");
var router = express.Router();
var axios = require("axios");

router.get("/", async function (req, res, next) {
  try {
    const response = await axios.get("https://dog.ceo/api/breeds/image/random");
    res.render("dog", { image: response.data.message });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
