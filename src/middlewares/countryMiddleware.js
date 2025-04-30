const { getCountryFromIP } = require("../services/geoLocationService");
const { UnauthorizedError } = require("../utils/errorHandler");

const checkCountryRestriction = async (req, res, next) => {
  try {
    const ip = req.ip || req.connection.remoteAddress;
    const country = await getCountryFromIP(ip);

    const restrictedCountries = [
      "Syria",
      "Afghanistan",
      "Iran",
      "North Korea",
      "Cuba",
    ];
    if (restrictedCountries.includes(country)) {
      throw new UnauthorizedError("Access denied from your country");
    }

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = { checkCountryRestriction };
