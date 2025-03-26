const express = require("express");
const {
  createSchool,
  createBulkSchools,
  getAllSchools,
} = require("../controllers/schoolController");

const schoolRouter = express.Router();
schoolRouter.post("/addSchool", createSchool);
schoolRouter.post("/addBulkSchools", createBulkSchools);
schoolRouter.get("/listSchools", getAllSchools);

module.exports = schoolRouter;
