const sportsDataService = require("../../services/sportsDataService");

async function getEventsList(req, res) {
  const items = await sportsDataService.getEventsList();

  res.send(items);
}

module.exports = { getEventsList };
