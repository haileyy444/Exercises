// Copy over your ***step2.js*** code to ***step3.js***.
// Add a feature where, on the command line, you can *optionally* provide an argument to output to a file instead of printing to the console. 
// The argument should look like this: `--out output-filename.txt readfile-or-url`. Current features should still work the same:
//     $node step3.js one.txt
//     This is file one.
//     $node step3.js http://google.com
//     <!doctype html><html ...
// However, if `--out` follows your script name, it should take the next argument and use that as the path to write to. For example:
//     $node step3.js --out new.txt one.txt
//     $# no output, but new.txt contains contents of one.txt
//     $node step3.js --out new.txt  http://google.com
//     $# no output, but new.txt contains google's HTML

// Make sure you handle errors trying to write to the file:
//     $node step3.js --out /no/dir/new.txt one.txt
//     Couldn't write /no/dir/new.txt:
//     Error: ENOENT: no such file or directory, open '/no/dir/new.txt'


const fs = require('fs');
const process = require('process');
const axios = require('axios');

function outputFunc(text, out) {
    if (out) {
        fs.writeFile(out, text, 'utf8', 
            function(error) {
                if (error) {
                    console.error(`Couldn't write ${out}: ${error}`);
                    process.exit(1);
                }
            }
        );
    }
    else {
        console.log(text);
    }
}



function cat(path, out) {
    fs.readFile(path, 'utf8', 
        function(error, data) {
            if (error) {
                console.error('Error reading ${path}: ${error}');
                process.exit(1);
            }
            else {
                outputFunc(data, out);
            }
        }
    );
}
async function webCat(url, out) {
    try {
        let response = await axios.get(url);
        outputFunc(response.data, out);
    }
    catch (error) {
        console.error('Error fetching ${url}: ${error}');
        process.exit(1);

    }
}
let path;
let out;

if (process.argv[2] === '--out') {
    out = process.argv[3];
    path = process.argv[4];
}
else {
    path = process.argv[2];
}
if (path.slice(0,4) === 'http') {
    webCat(path);
    // interesting and smart way to do this and check that it has a url
}
else {
    cat(path);
}