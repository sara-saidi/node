var http = require ('http');
var fs = require ('fs');
let data = "hello Node ";

http.createServer (function (req, res){

    fs.writeFile("welcome.txt",data,(err)=>{
        if (err)
        console.log(err);
        else{
            console.log("file welcome.txt written successfully !")
            console.log(data)
        }
    })
    res.write('<h1>hello Node !!!!</h1>')
    res.end();


}).listen(3000);