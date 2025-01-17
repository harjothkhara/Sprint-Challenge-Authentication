
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authRouter = require("../routes/authRouter.js");
const jokesRouter = require("../routes/jokesRouter.js");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/auth", authRouter);
server.use("/api/jokes", jokesRouter);

// //testing server
// server.get('/', (req, res) => {
//     res.send("It's alive!");
//   });

module.exports = server;
