import * as fs from 'fs';
import * as readline from 'readline';

import client from "./typesense.js";

// Here we define our schema. A schema is our way of telling Typesense the structure
// of the data it should expect from us.
const hotelsSchema = {
    'name': 'hotels',
    'fields': [
        { 'name': 'hotel_name', 'type': 'string'},
        { 'name': 'address', 'type': 'string'},
        { 'name': 'cordinates', 'type': 'geopoint' },
    ]
}

// creates a new collection on the server
client.collections().create(hotelsSchema)
    .then(function () {
        readline.createInterface({
            input: fs.createReadStream('hotels.jsonl'),
            terminal: false
        }).on('line', function (line) {
            let hotelDocument = JSON.parse(line);
            
            client.collections('hotels').documents().create(hotelDocument);
        });
});