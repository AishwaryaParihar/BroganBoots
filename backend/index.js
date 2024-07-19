const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const connectDB = require("./config/db");
const router = require("./routes");

const app = express();
app.use(
  cors({
    origin: 'https://brogan-boots.vercel.app, http://localhost:5173/',
    credentials: true,
  })
);

// var whitelist = ['https://brogan-boots.vercel.app', 'http://localhost:5173']
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }

// app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", 'https://brogan-boots.vercel.app', 'http://localhost:5173');
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET,HEAD,PUT,PATCH,POST,DELETE"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.setHeader("Access-Control-Allow-Credentials", "true");
//   next();
// });

app.get("/", (req, res) => {
  return res.send("SERVER IS RUNNING");
});

app.get("/test", (req, res) => {
  return res.send("This is test route");
});

app.use("/api", router);

const PORT = 8081 || process.env.PORT;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("connect to db");
    console.log("Server is running");
  });
});
