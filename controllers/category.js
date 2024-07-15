const fs = require('fs')
const path = require('path');
const realyze = require('../config').realyze;
const fs_functions = require('../functions/fs_functions');
const variables = require('../variables/variables');

const cachesPath = variables.caches.category;    

module.exports.category = async (req, res) => {
     try {
          if (fs.existsSync(`${cachesPath}/categories/categories.json`)) {        
               fs.readFile( `${cachesPath}/categories/categories.json`,"utf-8",
                    async function(err, data) {
                         if (err) throw err;
                         else {
                              const [lastCategoryId] = await realyze("SELECT MAX(id) AS max FROM category");
                              const parsedData = JSON.parse(data);
                              if (parsedData[parsedData.length - 1].id !== lastCategoryId.max) {                                 
                                   const result = await realyze("SELECT * FROM `category`");
                                   fs_functions.writeCacheFile(
                                        `${cachesPath}/categories/categories.json`,
                                        result
                                   )
                                   res.send(result);
                              }else{
                                   res.send(data);
                              }
                         }
               })
          }else{
               const result = await realyze("SELECT * FROM `category`");
               fs_functions.writeCacheFile(
                    `${cachesPath}/categories/categories.json`,
                    result
               )
          }
     } catch (err) {
          throw err;
     }
}

module.exports.categoryById = async (req, res) => {
     const id = req.params.id;
     const [result] = await realyze("SELECT * FROM `category` WHERE `id`= ? ", [id]);
     res.send(result);
}
