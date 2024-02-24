const fs = require('fs');
const fsPromises = require('fs/promises');

const writeCacheFile = ( path,data) => {
     fs.writeFile(path,
          JSON.stringify(data,undefined, 2),
               {encoding:'utf-8'}, async function(err) {
                    if (err) throw err;
                    else {
                         console.log('write');
                    }
          })
}
const readCacheFile =async (path,updatedData, maxId) => {
     let currentData = [];
     fs.readFile( path,"utf-8",
          async function(err, data) {
               if (err) throw err;
               else {                                   
                    
                    if (JSON.parse(data)[0].id < maxId.max) {
                         currentData = updatedData;
                         writeCacheFile(
                              `${cachesPath}/products/${[categories[params - 1]?.alias]}.json`,
                              currentData);
                    }else{
                         
                         currentData =  data;
                    }
                    //res.send
               }
               return await currentData
          }
     )
}
module.exports = {
      writeCacheFile,
     readCacheFile
}
