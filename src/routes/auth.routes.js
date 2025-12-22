import {Router} from "express"
import {login, registerUser, logoutUser} from "../controllers/auth.controllers.js"
import { validate } from "../middlewares/validator.middleware.js";
import { userRegisterValidator, userLoginValidator } from "../validators/index.js";

const router = Router()

router.route("/register").post(userRegisterValidator(),validate,registerUser);
router.route("/login").post(login);

export default router;