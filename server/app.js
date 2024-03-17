const express = require("express");
const app = express();
require("./src/db/dbConnect");
const PORT = process.env.PORT || 8000;

app.use(express.json());

// link router files to make our routes easy
app.use(require("./src/router/auth"));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on -> http://localhost:${PORT}/`);
});
