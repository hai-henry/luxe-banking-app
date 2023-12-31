import dotenv from "dotenv";
dotenv.config();

import {
  Configuration,
  PlaidApi,
  PlaidEnvironments,
  Products,
  CountryCode,
} from "plaid";
import util from "util";
import { v4 as uuidv4 } from "uuid";
import express, { NextFunction, Request, Response } from "express";
import bodyParser from "body-parser";
import moment from "moment";
import cors from "cors";
import { link } from "fs";

// Process environment variables from .env file
const APP_PORT = process.env.APP_PORT || 8000;
const PLAID_CLIENT_ID = process.env.PLAID_CLIENT_ID || "";
const PLAID_SECRET = process.env.PLAID_SECRET || "";
const PLAID_ENV = process.env.PLAID_ENV || "sandbox";

// PLAID_PRODUCTS and PLAID_COUNTRY_CODES processed from .env file
const PLAID_PRODUCTS = (
  process.env.PLAID_PRODUCTS || Products.Transactions
).split(",");
const PLAID_COUNTRY_CODES = (process.env.PLAID_COUNTRY_CODES || "US").split(
  ",",
);
const PLAID_REDIRECT_URI = process.env.PLAID_REDIRECT_URI || "";

// Configure Plaid client
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

app.post(
  "/api/info",
  function (req: Request, res: Response, next: NextFunction) {
    res.json({
      products: PLAID_PRODUCTS as Products[],
    });
  },
);

// Create a link_token. This link_token is a short lived,
// one-time use token that authenticates your app with Plaid Link.
app.post(
  "/api/create_link_token",
  async function (req: Request, res: Response, next: NextFunction) {
    // Properties to be used by Plaid to generate a link token
    const requestToken = {
      user: {
        client_user_id: "user-id",
      },
      client_name: "Luxe Banking",
      products: PLAID_PRODUCTS as Products[],
      country_codes: PLAID_COUNTRY_CODES as CountryCode[],
      language: "en",
      redirect_uri: PLAID_REDIRECT_URI,
    };

    try {
      // Attempt to create link token by asynchronously request to Plaid API
      const createTokenResponse = await client.linkTokenCreate(requestToken);
      const linkToken = createTokenResponse.data.link_token; // Extract link token from response
      res.json({ link_token: linkToken }); // Temporarily pass link token to client
    } catch (error) {
      console.error("Error: ", error);
    }
  },
);

app.post(
  "/api/exchange_public_token",
  async function (req: Request, res: Response, next: NextFunction) {
    const publicToken = req.body.public_token;
    try {
      const response = await client.itemPublicTokenExchange({
        public_token: publicToken,
      });

      // These values should be saved to a persistent database and
      // associated with the currently signed-in user
      const accessToken = response.data.access_token;
      const itemID = response.data.item_id;

      res.json({ public_token_exchange: "complete" });
    } catch (error) {
      console.error("Error: ", error);
    }
  },
);

const server = app.listen(APP_PORT, () => {
  console.log(`Server is running on port: ${APP_PORT}`);
});
