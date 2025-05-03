const axios = require("axios");

const getCountryFromIP = async (ip) => {
  try {
    // For testing purposes, if IP is localhost, return a default country
    if (ip === "::1" || ip === "127.0.0.1") {
      return "United States";
    }

    const response = await axios.get(`http://ip-api.com/json/${ip}`);

    return response.data.country;
  } catch (error) {
    console.error("Error fetching country from IP:", error);
    return "Unknown";
  }
};

module.exports = { getCountryFromIP };
