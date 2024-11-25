/** Command-line tool to generate Markov text. */
// We want a script, makeText.js, that works like this:
    // $node makeText.js file eggs.txt
    // ... generated text from file 'eggs.txt' ...

    // $node makeText.js url http://www.gutenberg.org/files/11/11-0.txt
    // ... generated text from that URL ...
//URL AND FILE - HANDLE ERRORS "CANT READ FILE/URL"

const fs = require('fs');
const process = require('process');
const axios = require('axios');
const markov = require("./markov");

function Text(text) {
    let markovM = new markov.MarkovMachine(text);
    console.log(markovM.makeText());
}

// read file -> create text
function makeText(path) {
    fs.readFile(path, 'utf8', 
        function cb(error, data) {
            if (error) {
                console.error(`Couldn't read file: ${path}: ${error}`);
                process.exit(1);
            }
            else {
                Text(data);
            }
        }
    );

}
//read url -> create text
async function URLtoText(url) {
    let response;
    try {
        response = await axios.get(url);
       
    }
    catch (error) {
        console.error(`Error reading URL: ${url}: ${error}`);
        process.exit(1);

    }
    Text(response.data);
}
let [method, path] = process.argv.slice(2);

if (method === "file") {
   makeText(path);
}
else if (method === "url") {
    URLtoText(path);
}
else {
    console.error(`Unknown method: ${method}`);
    process.exit(1);
}