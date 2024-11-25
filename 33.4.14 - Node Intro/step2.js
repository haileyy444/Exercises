// Copy over your ***step1.js*** code to ***step2.js*** Add a new function, ***webCat***. 
// This should take a URL and, using [axios](https://github.com/axios/axios#installing), should read the content of that
// URL and print it to the console. Modify the code that invoked ***cat*** so that, based on the command-line args, 
// it decides whether the argument is a file path or a URL and calls either ***cat*** or ***webCat***, respectively.
    // $node step2.js one.txt
    // This is file one.

    // $node step2.js http://google.com
    // <!doctype html><html ...

// If there is an error getting the page, it should print that.
//     $node step2.js http://rithmschool.com/no-such-path
//     Error fetchinghttp://rithmschool.com/no-such-path:
//     Error: Request failed with status code 404


const fs = require('fs');
const process = require('process');
const axios = require('axios');

function cat(path) {
    fs.readFile(path, 'utf8', 
        function(error, data) {
            if (error) {
                console.log('Error reading ${path}: ${error}');
                process.exit(1);
            }
            else {
                console.log(data);
            }
        }
    );
}
async function webCat(url) {
    try {
        let response = await axios.get(url);
        console.log(response.data);
    }
    catch (error) {
        console.error('Error fetching ${url}: ${error}');
        process.exit(1);

    }
}
let path = process.argv[2];
if (path.slice(0,4) === 'http') {
    webCat(path);
    // interesting and smart way to do this and check that it has a url
}
else {
    cat(path);
}