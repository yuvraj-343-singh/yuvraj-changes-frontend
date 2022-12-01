const express = require("express");
const app = express();
const pool = require("./db");

const cors = require('cors');
// const cors = require("cors");
// const corsOptions = {
//   origin: "http://localhost:3000",
//   credentials: true, //access-control-allow-credentials:true
//   optionSuccessStatus: 200,
// };
// app.use(cors(corsOptions));
// app.use(express.json());

//get data
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
     next();
  });

app.get("/question_one_shifts", async (req, res) => {
  try {
    const question_one_shifts = await pool.query(
      "SELECT * FROM question_one_shifts"
    );
    res.json(question_one_shifts.rows);
  } catch (error) {
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log("server on 5000");
});
