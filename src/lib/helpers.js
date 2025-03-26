const haversine = require("haversine");

/** Calculate Distance Between Two Points */
exports.calculateDistance = (a, b) => {
  return haversine(a, b, { unit: "km" });
};
