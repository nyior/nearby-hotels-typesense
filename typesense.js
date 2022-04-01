import "dotenv/config";
import { Client } from "typesense";

// Create a new client
const client = new Client({
  nodes: [
    {
      host: process.env.TYPESENSE_HOST,
      port: process.env.TYPESENSE_PORT,
      protocol: process.env.TYPESENSE_PROTOCOL,
    },
  ],
  apiKey: process.env.TYPESENSE_ADMIN_KEY,
  connectionTimeoutSeconds: 2,
});

export default client;
