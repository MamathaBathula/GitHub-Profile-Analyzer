const axios = require("axios");
const profileModel = require("../models/ProfileModel");

const analyzeProfile = async (req, res) => {
    try {
        const { username } = req.body;

        const response = await axios.get(
            `https://api.github.com/users/${username}`
        );

        const user = response.data;

        const profileData = {
            username: user.login,
            name: user.name,
            followers: user.followers,
            following: user.following,
            public_repos: user.public_repos,
            bio: user.bio,
            company: user.company,
            location: user.location,
            profile_url: user.html_url
        };

        profileModel.saveProfile(profileData, (err) => {
            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: "Profile stored successfully",
                data: profileData
            });
        });

    } catch (error) {
        res.status(404).json({
            message: "GitHub user not found"
        });
    }
};

const getAllProfiles = (req, res) => {
    profileModel.getAllProfiles((err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};

const getProfileByUsername = (req, res) => {
    const username = req.params.username;

    profileModel.getProfileByUsername(username, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
};
const updateProfile = (req, res) => {

    const username = req.params.username;

    profileModel.updateProfile(
        username,
        req.body,
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: "Profile updated successfully"
            });

        }
    );

};

const deleteProfile = (req, res) => {

    const username = req.params.username;

    profileModel.deleteProfile(
        username,
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: "Profile deleted successfully"
            });

        }
    );

};
module.exports = {
    analyzeProfile,
    getAllProfiles,
    getProfileByUsername,
    updateProfile,
    deleteProfile
};