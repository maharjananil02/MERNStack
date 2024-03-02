import exporess from "express"
import {registerUser,loginUser,currentUser} from "../controller/userController.js"
import validateToken from "../middleware/validateTokenHandler.js"

const router = exporess.Router();

router.post("/register",registerUser);

router.get("/login",loginUser);

router.get("/current",validateToken,currentUser);

export default router;