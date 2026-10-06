const express = require("express");

const router = express.Router();

const {
    createSOS,
    getSOSHistory,
    resolveSOS
} = require("../controllers/sosController");

router.post("/", createSOS);

router.get("/history", getSOSHistory);

router.put("/:id/resolve", resolveSOS);

module.exports = router;