const { Sequelize } = require("sequelize");

const db = new Sequelize(process.env.MYSQL_URI, {
  dialect: "mysql",
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

global.inDevelopment = process.env.NODE_ENV === "development";

const connectDb = async () => {
  try {
    await db.authenticate();
    inDevelopment &&
      console.log("Connection has been established successfully.");
    await db.sync({ alter: true });
    inDevelopment && console.log("Database synced successfully.");
  } catch (error) {
    console.log("Unable to connect to the database:", error);
    process.exit(1);
  }
};

module.exports = { db, connectDb };
