// write a function, ***cat***. should take one argument, ***path***, 
// and it should read the file with that path, and print the contents of that file.
// Then, write some code that calls that function, allowing you to specify
//  the path argument via the command line. For example:
//     $node step1.js one.txt
//     This is file one.
// If you give it the path of a non-existent file,
// it should print that error and halt the script execution:
//     $node step1.js huh.txt
//     Error reading huh.txt:
//     Error: ENOENT: no such file or directory, open 'huh.txt'


const fs = require('fs');
const process = require('process');

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
cat(process.argv[2]);