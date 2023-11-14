const express = require("express");
const path = require("path"); // Adding path module for file paths

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "../client/dist"))); // Use path.join for correct file paths
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

try {
  const htmlRoutes = require("./routes/htmlRoutes"); // Ensure correct path to htmlRoutes file
  htmlRoutes(app);
} catch (error) {
  console.error("Error loading routes:", error);
}

app.listen(PORT, (err) => {
  if (err) {
    console.error("Error starting the server:", err);
  } else {
    console.log(`Server is running on port ${PORT}`);
  }
});
