const express = require("express");
const { getUSerInfo } = require("../controler/usercontroler");
const router = express.Router();

router.route("/").get(getUSerInfo)

router.post("/",(req,res) => {
    console.log("body call",req.body)
    res.json({"name":"Hello","age":"1"})
})


module.exports = router;
