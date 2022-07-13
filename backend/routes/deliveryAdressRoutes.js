import express from "express";
import {
  addDeliverAdress,
  getMyAdresses,
} from "../controllers/deliveryController.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();

router.route("/").post(protect, addDeliverAdress);
router.route("/myadresses").get(protect, getMyAdresses);
export default router;
