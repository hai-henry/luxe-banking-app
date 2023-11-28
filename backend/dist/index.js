"use strict";
require("dotenv").config();
const { Configuration, PlaidApi, Products, PlaidEnvironments, } = require("plaid");
const util = require("util");
const { v4: uuidv4 } = require("uuid");
const express = require("express");
const bodyParser = require("body-parser");
const moment = require("moment");
const cors = require("cors");
const APP_PORT = process.env.APP_PORT || 8000;
const PLAID_CLIENT_ID = process.env.PLAID_CLIENT_ID;
const PLAID_SECRET = process.env.PLAID_SECRET;
const PLAID_ENV = process.env.PLAID_ENV || "sandbox";
const PLAID_PRODUCTS = (process.env.PLAID_PRODUCTS || Products.Transactions).split(",");
const PLAID_COUNTRY_CODES = (process.env.PLAID_COUNTRY_CODES || "US").split(",");
const configuration = new Configuration({
    basePath: PlaidEnvironments.sandbox,
    baseOptions: {
        headers: {
            "PLAID-CLIENT-ID": PLAID_CLIENT_ID,
            "PLAID-SECRET": PLAID_SECRET,
        },
    },
});
const client = new PlaidApi(configuration); // Create instance of Plaid API with configurations
const app = express(); // Create instance of Express application
app.use(bodyParser.json()); // Interpret JSON data sent to the server
app.use(cors()); // Allow cross-origin resource sharing (CORS)
const server = app.listen(APP_PORT, () => {
    console.log(`Server is running on port ${APP_PORT}`);
});
