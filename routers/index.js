const bookRouter = require("./bookRouter");
const express = require("express");
const router = express.Router();

router.use("/", bookRouter);

module.exports = router;
