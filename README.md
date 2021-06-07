# Foodie Reviews

Today you'll be building an app for viewing and editing Foodie dishes. You will be using a local API and building out the frontend for our app, Foodie Reviews.

## Setup

- Fork and clone this repository
- Run `json-server --watch db.json` to get the backend started
- Open `index.html` in your browser

## Endpoints

Your base URL for your API will be: http://localhost:3000

The endpoints you will need are:

- GET `/dishes/[:id]` (start with /dishes/1)
- PATCH `/dishes/[:id]`

## Core Deliverables

As a user, I can:

- See the first dish's details, including its **name, image, description, and reviews**, when the page loads
- Change the dish's description and **still see that change when reloading the page**
- Add a review for the dish (no persistence needed)