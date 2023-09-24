const mongoose = require("mongoose");
require('dotenv').config();


const db = process.env.MONGODB_URL;


mongoose.connect(db, {
          useNewUrlParser: true,
          useUnifiedTopology: true
}).then(() => console.log("Database Connected...")).catch((error) => {
          console.log(error + "   Database not connected...");
})