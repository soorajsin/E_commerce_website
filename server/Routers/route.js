const express = require("express");
const router = new express.Router();

router.post("/register", async (req, res) => {
          try {
                    console.log(req.body);
          } catch (error) {
                    res.status(422).json({
                              error: "Internal Server error not register"
                    })
          }
});


module.exports=router;