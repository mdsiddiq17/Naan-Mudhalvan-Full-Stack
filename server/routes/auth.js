const router = require("express").Router();

const authController = require("../controllers/authController");

router.post("/auth/login", authController.login);

router.post("/auth/register", authController.register, authController.sendOTP);
router.post("/auth/verify", authController.verifyOTP);
router.post("/auth/send-otp", authController.sendOTP);

router.post("/auth/forgot-password", authController.forgotPassword);
router.post("/auth/reset-password", authController.resetPassword);

module.exports = router;
