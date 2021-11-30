import { Router } from "express";
import {
  indexController,
  storeController,
  destroyController,
  updateController,
} from "../Resources/Bloco";

import checkToken from "../Midleware/tokenJson";

const router = Router();

router.get("/api/v1/bloco", checkToken, indexController);
router.post("/api/v1/bloco", checkToken, storeController);
router.put("/api/v1/bloco/:id", checkToken, updateController);
router.delete("/api/v1/bloco/:id", checkToken, destroyController);

export default router;
