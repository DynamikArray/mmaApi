var express = require("express");
var router = express.Router();

const eventsRouter = require("./events/routes");

router.use("/events", eventsRouter);

module.exports = router;
