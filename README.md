# GitHub Profile Analyzer API

## Project Overview

GitHub Profile Analyzer API is a backend application built using Node.js, Express.js, MySQL, and the GitHub Public API. It fetches a GitHub user's public profile information, stores useful insights in a MySQL database, and provides REST APIs to manage the stored profiles.

## Tech Stack

* Node.js
* Express.js
* MySQL
* GitHub Public API
* Axios
* dotenv

## Features

* Fetch GitHub profile using username
* Store profile information in MySQL
* Get all stored profiles
* Get a single profile by username
* Update a stored profile
* Delete a stored profile

## API Endpoints

### Analyze GitHub Profile

POST /api/analyze

Request Body:
{
"username": "octocat"
}

### Get All Profiles

GET /api/profiles

### Get Single Profile

GET /api/profiles/:username

### Update Profile

PUT /api/profiles/:username

### Delete Profile

DELETE /api/profiles/:username

## Installation

1. Clone the repository
2. Run:

npm install

3. Create a .env file:

PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=YOUR_PASSWORD
DB_NAME=github_analyzer

4. Start the server:

npm run dev

## Database

Create a database named:

github_analyzer

Then create the required table for storing GitHub profiles.

## Author

Mamatha Bathula
