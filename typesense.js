import { Client } from "typesense";

const client = new Client({
  nodes: [
    {
      host: "",
      port: 443,
      protocol: "https",
    },
  ],
  apiKey: "",
  connectionTimeoutSeconds: 2,
});

export default client;
