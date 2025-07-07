import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/dbconfig";
import routes from "./v1/routes/route.mapping";
import logger from "./middleware/logger.middleware";
import cors from "cors";
dotenv.config();

connectDB();

// import { scheduleAllCrons } from "./cron_job/cron.mapping";

// Schedule all crons by calling the function
// scheduleAllCrons();

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

// Initialize Firebase Admin SDK
// admin.initializeApp({
//   credential: admin.credential.cert(
//     require("../path/to/firebase-service-account.json")
//   ),
// });

// Middleware
app.use(express.json());
app.use(logger);

// import "./services/firebase.service";
// root route
app.use("/v1", routes);

app.all("/{*any}", function (req: any, res: any) {
  const message = `Can't ${req.method} ${req.originalUrl} on this server`;
  return res.status(404).json({
    statusCode: 404,
    message: message,
  });
});

// Start the server
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
