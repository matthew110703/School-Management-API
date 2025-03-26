const { calculateDistance } = require("../lib/helpers");
const School = require("../models/School");

/** Add New School */
exports.createSchool = async (req, res) => {
  try {
    // Validation
    const { name, address, latitude, longitude } = req.body;
    if (!name || !address || !latitude || !longitude) {
      return res.status(400).json({
        message:
          "Missing required details: [name, address, latitude, longitude]",
      });
    }

    const school = await School.create(req.body);
    res.status(201).json({
      message: "School created successfully",
      data: school,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

/** Add Bulk Schools */
exports.createBulkSchools = async (req, res) => {
  try {
    // Validation
    const schools = req.body;
    if (!schools || schools.length === 0) {
      return res.status(400).json({
        message: "Missing required details: schools",
      });
    }

    const createdSchools = await School.bulkCreate(schools);
    res.status(201).json({
      message: "Schools created successfully",
      count: createdSchools.length,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

/** Get All Schools */
exports.getAllSchools = async (req, res) => {
  try {
    const { latitude, longitude, radius = 50 } = req.query;
    if (!latitude || !longitude) {
      return res.status(400).json({
        message: "Missing required details: [latitude, longitude, radius]",
      });
    }

    const schools = await School.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });

    // Filter schools within the specified radius
    const filteredSchools = schools.filter((school) => {
      const distance = calculateDistance(
        { latitude, longitude },
        { latitude: school.latitude, longitude: school.longitude }
      );
      return distance <= radius;
    });

    res.status(200).json({
      success: true,
      message: "Schools fetched successfully",
      data: {
        radius: `${radius} km`,
        count: filteredSchools.length,
        schools: filteredSchools,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
