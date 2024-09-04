const express = require('express');
const router = express.Router();
// const multer = require('multer');
const upload = require("../middleware/uploadMiddleware")
const { createUser, login, getUser, updateUser, deleteUser, logout, verifyotp, resetPassword } = require('../controller/userController')

// Multer configuration for file uploads
// const storage = multer.diskStorage({
//     destination:(req,file, cb)=>{
//         cb(null, "uploads/")
//     },
//     filename:(req,file, cb)=>{
//         cb(null, Data.now()+"-"+file.originalname)
//     }
// });

// const upload = multer({storage})

//Rotes
router.post("/",upload.single("image"), createUser);
router.get("/:id", getUser)
router.put("/:id", updateUser)
router.delete("/:id",deleteUser)

router.post("/login", login)
router.post("/logout", logout)
router.post("/verifyotp", verifyotp)
router.post("/resetpassword", resetPassword)


module.exports = router;
