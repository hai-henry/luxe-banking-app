import dotenv from "dotenv";
dotenv.config();

import { Configuration, PlaidApi, PlaidEnvironments } from "plaid";
import util from "util";
import { v4 as uuidv4 } from "uuid";
import express from "express";
import bodyParser from "body-parser";
import moment from "moment";
import cors from "cors";

const APP_PORT = process.env.APP_PORT || 8000;
const PLAID_CLIENT_ID = process.env.PLAID_CLIENT_ID;
const PLAID_SECRET = process.env.PLAID_SECRET;
const PLAID_ENV = process.env.PLAID_ENV || "sandbox";

const configuration = new Configuration({
  basePath: PlaidEnvironments.sandbox,
  baseOptions: {
    headers: {
      "PLAID-CLIENT-ID": PLAID_CLIENT_ID,
      "PLAID-SECRET": PLAID_SECRET,
    },
  },
});
