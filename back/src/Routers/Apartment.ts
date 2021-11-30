import { Router } from "express";
import {
  indexController,
  searchController,
  storeController,
  destroyController,
  updateController,
} from "../Resources/Apartment";

import checkToken from "../Midleware/tokenJson";

const router = Router();

router.get("/api/v1/apartment", checkToken, indexController);
router.post("/api/v1/searchApartment", checkToken, searchController);
router.post("/api/v1/apartment", checkToken, storeController);
router.put("/api/v1/apartment/:id", checkToken, updateController);
router.delete("/api/v1/apartment/:id", checkToken, destroyController);

export default router;
