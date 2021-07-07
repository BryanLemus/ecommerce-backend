import { Router } from "express";
const router = Router();

import * as authCtrl from "../controllers/auth.controller";
import { verifySingup } from "../middlewares";

router.post("/singin", authCtrl.singIn);
router.post(
  "/singup",
  [verifySingup.checkDuplicateUsernameOrEmail, verifySingup.checkRolesExisted],
  authCtrl.singUp
);

export default router;
