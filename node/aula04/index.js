const fs = require('fs').promises;
const path = require('path');

fs.readdir('./') 
.then( (files)=>{
    console.log(files)
}).catch(err =>{
    console.log(err)
});
;