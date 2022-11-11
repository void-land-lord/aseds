const http =require('http');
const server=http.createServer((req,res)=>{
    console.log(req.url);
    req?.url=='/'
    ?res.end('<h1>hello world</h1>')
    :res.end('ooops page not found');
    //if(req.url=='/favicon.ico') console.log(req);
})
server.listen(3001);