var express = require("express");
var router = express.Router();

const eventsController = require("../../controllers/events/eventsController");

router.get("/list", eventsController.getEventsList);

module.exports = router;
