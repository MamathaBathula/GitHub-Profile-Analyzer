const db = require("../config/db");

const saveProfile = (data, callback) => {
    const sql = `
    INSERT INTO github_profiles
    (username, name, followers, following, public_repos, bio, company, location, profile_url)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
        data.username,
        data.name,
        data.followers,
        data.following,
        data.public_repos,
        data.bio,
        data.company,
        data.location,
        data.profile_url
    ];

    db.query(sql, values, callback);
};

const getAllProfiles = (callback) => {
    db.query("SELECT * FROM github_profiles", callback);
};

const getProfileByUsername = (username, callback) => {
    db.query(
        "SELECT * FROM github_profiles WHERE username = ?",
        [username],
        callback
    );
};
const updateProfile = (username, data, callback) => {
    const sql = `
    UPDATE github_profiles
    SET
    name=?,
    followers=?,
    following=?,
    public_repos=?,
    bio=?,
    company=?,
    location=?,
    profile_url=?
    WHERE username=?
    `;

    db.query(
        sql,
        [
            data.name,
            data.followers,
            data.following,
            data.public_repos,
            data.bio,
            data.company,
            data.location,
            data.profile_url,
            username
        ],
        callback
    );
};

const deleteProfile = (username, callback) => {
    db.query(
        "DELETE FROM github_profiles WHERE username=?",
        [username],
        callback
    );
};
module.exports = {
    saveProfile,
    getAllProfiles,
    getProfileByUsername,
    updateProfile,
    deleteProfile
};