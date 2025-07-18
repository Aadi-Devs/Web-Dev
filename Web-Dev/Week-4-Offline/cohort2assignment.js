//! cohort 2 assignment



/*
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */




const express = require("express");
const app = express();

const fs = require("fs");
const path = require("path");



//! 
const FILES_DIR = path.join(__dirname, "files");
//! dirname means current location deirectiry nnle
// and then path.join is uesd to concatenate the address to the folder and it the file in that directory on which we have to do some operations'





app.get("/files", function(req, res){
    
    // fs.readFile("a.txt", function(err, data){
    //     res.json({
    //         msg: data.toString(),
    //     })
    // })

    //! to read files present in the directory

    fs.readdir(FILES_DIR, (err, files)=>{
        if(err){
            res.status(500).json({
                error: "can't read files directory",
            })
        }else{
            res.status(200).json(files)
        }
    })

})





// app.post("/", function(req, res){

// })






// app.put("/", function(req, res){

// })






// app.delete("/", function(req, res){

// })




app.listen(3000);