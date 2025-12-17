// import { Router } from "express";
import express from "express";
import { healthCheck } from "../controllers/healthcheck.controllers.js";

const router = express();

// router.route("/").get(healthCheck)
router.get("/", healthCheck);

export default router;
