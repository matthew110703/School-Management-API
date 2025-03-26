// Load env variables
const dotenv = require("dotenv");
dotenv.config();

// Load app
const app = require("./app");

// Connect to database
const { connectDb } = require("./lib/db");
connectDb();

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
