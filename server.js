const http = require('http');
const fs = require('fs');
const path = require('path');
const MIME = {'.html':'text/html','.css':'text/css','.js':'application/javascript','.json':'application/json','.png':'image/png','.jpg':'image/jpeg','.svg':'image/svg+xml','.ico':'image/x-icon','.woff2':'font/woff2'};
http.createServer((req,res)=>{
  let p = path.join(__dirname, decodeURIComponent(req.url.split('?')[0]));
  if(p.endsWith('/')) p += 'index.html';
  fs.readFile(p,(err,data)=>{
    if(err){res.writeHead(404);res.end('Not found');return;}
    res.writeHead(200,{'Content-Type':MIME[path.extname(p)]||'application/octet-stream'});
    res.end(data);
  });
}).listen(8080,()=>console.log('Server on 8080'));
