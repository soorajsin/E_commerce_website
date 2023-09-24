const express = require("express");
const app = express();
require("./DB/connection");
const router = require("./Routers/route");
const cors = require("cors");
const port = 4000 || process.env.port;



app.get("/", (req, res) => {
          res.send("<h1>Hello World</h1>");
});


app.use(express.json());
app.use(cors());
app.use(router);



app.listen(port, () => {
          console.log(`Server is running on ${port}`);
})