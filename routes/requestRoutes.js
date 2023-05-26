const express = require("express");
const {createRequest,acceptRequest,getAllRequests} = require("../controllers/requestController");
const validateToken = require("../middlewares/validateTokenHandler");
const router = express.Router();

router.use(validateToken);

router.get("/" ,(req,res)=>{
    res.send("Hello World");
});
router.post("/create",createRequest);
router.put("/accept",acceptRequest);
router.get("/getAll",getAllRequests);

module.exports = router;