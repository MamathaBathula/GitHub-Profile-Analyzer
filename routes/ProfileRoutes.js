const express = require("express");

const router = express.Router();

const {
    analyzeProfile,
    getAllProfiles,
    getProfileByUsername,
    updateProfile,
    deleteProfile
} = require("../controllers/ProfileController");

router.post("/analyze", analyzeProfile);

router.get("/profiles", getAllProfiles);

router.get("/profiles/:username", getProfileByUsername);

router.put("/profiles/:username", updateProfile);

router.delete("/profiles/:username", deleteProfile);

module.exports = router;