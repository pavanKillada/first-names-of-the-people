const listOfPeoples = require("../country/state/city/index");
const peoplesFirstName = require("../utilities/utils/index");

module.exports = function () {
  let myArray = peoplesFirstName(listOfPeoples);
  return myArray;
};
