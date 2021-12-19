const sportsDataService = require("../../services/sportsDataService");

async function getEventsList(req, res) {
  const eventYear = 2021;
  const eventsList = await sportsDataService.getEventsList(eventYear);
  res.send(eventsList);
}

module.exports = { getEventsList };
