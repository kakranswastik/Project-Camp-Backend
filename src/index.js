import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./db/db-connection.js";

dotenv.config({
  path: "./.env",
});

const port = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening on port http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection error!");
    process.exit(1);
  });
