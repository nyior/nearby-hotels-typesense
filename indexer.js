import * as fs from "fs";
import * as readline from "readline";

import client from "./typesense.js";

// In Typesense, a group of data stored is called a collection. And each data in a
// collection is called a document. In our case, we are going to have a collection of
// hotels, and each hotel in that collection is a document. Note that all the documents
// in a collection follow thesame structure(thesame number of fields and field types).
// to ensure these constraint we'd need to define the structure of our collection upfront.
const hotelsSchema = {
  name: "hotels",
  fields: [
    { name: "hotel_name", type: "string" },
    { name: "address", type: "string" },
    { name: "coordinates", type: "geopoint" },
  ],
};

// Okay, we've defined the structure of our collection. Next, we'd create a collection
// based on the structure we've defined. This is exactly what the snippet
// client.collections().create(hotelsSchema) does for us.
// Next we read each line from our hotels.jsonl file and create a document based on the
// content of that line in our typesense collection with the snippet,
// client.collections('hotels').documents().create(hotelDocument);
client
  .collections()
  .create(hotelsSchema)
  .then(function () {
    readline
      .createInterface({
        input: fs.createReadStream("hotels.jsonl"),
        terminal: false,
      })
      .on("line", function (line) {
        let hotelDocument = JSON.parse(line);

        client.collections("hotels").documents().create(hotelDocument);
      });
  });
