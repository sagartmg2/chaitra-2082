/* 
    global objects

        - console
        - setTimout
        - setInterval
        - require
        - module
        _ __filename
        - __dirname
*/

console.log(__filename);
console.log(__dirname);

/* 
    modules
        - global modules
            - fs
            - path
            - http  
        - local modules
            
        - third party module
            - bcrypt
            - jwt
            - express


*/

const fs = require("fs"); // { writesFilesycn: (name,contnet) =>{}}
fs.writeFileSync("2026-05-28.log", "info: user logged in");

const path = require("path");

const newPath = path.join(__dirname, "/uploads");
console.log(newPath);
console.log(path.extname("user-upload.pdf"));


// const auth = require("./auth")  // { }
// auth.signup("user@gmail.com", "password");
// auth.login("user@gmail.com", "password");


const {signup,login} = require("./auth")  // { }
signup("user@gmail.com", "password");
login("user@gmail.com", "password");
