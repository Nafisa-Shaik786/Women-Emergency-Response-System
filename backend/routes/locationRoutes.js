const express = require("express");

const router = express.Router();

const {
    saveLocation,
    getLocation
} = require("../controllers/locationController");

router.post("/", saveLocation);

router.get("/:userId", getLocation);

module.exports = router;