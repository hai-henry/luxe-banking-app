import dotenv from "dotenv";
dotenv.config();

import {
  Configuration,
  PlaidApi,
  PlaidEnvironments,
  Products,
  // User,
  CountryCode,
} from "plaid";
import util from "util";
import { v4 as uuidv4 } from "uuid";
import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import moment from "moment";
import cors from "cors";
import { link } from "fs";

const APP_PORT = process.env.APP_PORT || 8000;
const PLAID_CLIENT_ID = process.env.PLAID_CLIENT_ID || "";
const PLAID_SECRET = process.env.PLAID_SECRET || "";
const PLAID_ENV = process.env.PLAID_ENV || "sandbox";

const PLAID_PRODUCTS = (
  process.env.PLAID_PRODUCTS || Products.Transactions
).split(",");
const PLAID_COUNTRY_CODES = (process.env.PLAID_COUNTRY_CODES || "US").split(
  ",",
);
const PLAID_REDIRECT_URI = process.env.PLAID_REDIRECT_URI || "";

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

app.post("/helloworld", (req: Request, res: Response) => {
  res.json({ message: "Hello, World!" });
});

app.post("/api/info", function (request, response, next) {
  response.json({
    products: PLAID_PRODUCTS as Products[],
  });
});

// TODO: Fix error with requesting to create link token
app.post(
  "/api/create_link_token",
  async function (req: Request, res: Response) {
    const requestToken = {
      user: {
        client_user_id: "user-id",
      },
      client_name: "Luxe Banking",
      products: ["auth"] as Products[],
      country_codes: ["US"] as CountryCode[],
      language: "en",
      redirect_uri: PLAID_REDIRECT_URI,
    };

    const createTokenResponse = await client.linkTokenCreate(requestToken);
    const linkToken = createTokenResponse.data.link_token;
    res.json({ link_token: linkToken });
  },
);

app.post(
  "/api/exchange_public_token",
  async function (req: Request, res: Response, next) {
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
      // handle error
    }
  },
);

const server = app.listen(APP_PORT, () => {
  console.log(`Server is running on port ${APP_PORT}`);
});
