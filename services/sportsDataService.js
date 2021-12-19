require("dotenv").config();
const APIURL = process.env.SPORTSDATA_URL;
const APIKEY = process.env.SPORTSDATA_API;
const APIHEADER = process.env.SPORTSDATA_AUTH_HEADER;

const Axios = require("axios");
const axios = Axios.create({
  baseURL: APIURL,
  timeout: 1000,
  headers: { [APIHEADER]: [APIKEY] },
});

const sportsData = {
  getEventsList: async function (numberYear) {
    try {
      const scheduleResponse = await axios.get(
        `/scores/json/Schedule/ufc/${numberYear}`
      );

      if (scheduleResponse.data) {
        const items = scheduleResponse.data.slice().sort((a, b) => {
          return new Date(b.DateTime) - new Date(a.DateTime);
        });
        return items;
      }
      return [];
    } catch (e) {
      console.log(e.response.data);
      return false;
    }
  },
};

module.exports = sportsData;
