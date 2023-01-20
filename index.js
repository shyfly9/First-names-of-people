const peoples = require("../country/state/city/index");
const getFirstNames = require("../utilities/utils/index");

const getPeopleInCity = (peoples) => {
  return getFirstNames(peoples);
};
module.exports = getPeopleInCity;
