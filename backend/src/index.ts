import dotenv from "dotenv";
dotenv.config();

import {
  Configuration,
  PlaidApi,
  PlaidEnvironments,
  Products,
  // User,
  CountryCode,
  LinkTokenCreateRequest,
} from "plaid";
import util from "util";
import { v4 as uuidv4 } from "uuid";
import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import moment from "moment";
import cors from "cors";

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

app.post(
  "/api/create_link_token",
  async function (req: Request, res: Response) {
    try {
      // Get the client_user_id by searching for the current user
      // const user: User = await User.find(...); // Replace '...' with your query logic
      // const clientUserId: string = user.id;

      const createTokenRequest: LinkTokenCreateRequest = {
        user: {
          client_user_id: "user-id",
        },
        client_name: "Luxe Banking App",
        products: PLAID_PRODUCTS as Products[],
        language: "en",
        redirect_uri: PLAID_REDIRECT_URI,
        country_codes: PLAID_COUNTRY_CODES as CountryCode[],
      };

      const createTokenResponse = await client.linkTokenCreate(
        createTokenRequest,
      );
      res.json(createTokenResponse.data);
    } catch (error) {
      // Handle error appropriately
      res.status(500).send(error);
    }
  },
);

const server = app.listen(APP_PORT, () => {
  console.log(`Server is running on port ${APP_PORT}`);
});
