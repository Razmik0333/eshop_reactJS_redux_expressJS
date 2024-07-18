const fs = require('fs')
const path = require('path');
const realyze = require('../../config').realyze;

const variables = require('../../variables/variables') 

module.exports.categoryList = async(req, res) => {
     const categoryList = await realyze("SELECT * FROM category ")
     console.log("🚀 ~ module.exports.categoryList=async ~ categoryList:", categoryList)
     res.send(categoryList);
}
module.exports.currentCategory = async(req, res) => {
     const catId = req.params.id;
     const [currentCategory] = await realyze("SELECT * FROM category WHERE id = ? ", [catId])
     res.send(currentCategory);
}
module.exports.create =  async(req, res) => {
     const body = req.body;
     await realyze("INSERT INTO `category` (alias, arm_name, rus_name, eng_name) VALUES ( ?, ?, ?, ? )",[body.alias, body.arm_name , body.rus_name, body.eng_name ])
     const [maxId] = await realyze("SELECT MAX(id) AS max FROM category ");
     const [currentCategory] = await realyze("SELECT * FROM category WHERE id = ? ", [maxId.max])
     res.send(currentCategory)
}
module.exports.update =  async(req, res) => {
     const body = req.body;
     await realyze("UPDATE `category` SET `alias` = ?, `arm_name` = ?, `rus_name` = ?, `eng_name` = ?  WHERE `id` = ? ", [body.alias, body.arm_name, body.rus_name,body.eng_name, body.id ]);
     
     const [updatedCategory] = await realyze("SELECT * FROM category WHERE id = ? ", [body?.id]);
     console.log("🚀 ~ module.exports.update=async ~ updatedCategory:", updatedCategory)

     res.send(updatedCategory)

}

module.exports.delete = async(req, res) => {
     const categoryId = req.body.category_id
     await realyze("DELETE FROM category WHERE id = ?", [categoryId]);
     const categoriesAfterDelete = await realyze("SELECT * FROM category ");
     console.log("🚀 ~ module.exports.delete ~ categoriesAfterDelete:", categoriesAfterDelete)

     res.send(categoriesAfterDelete);
}
module.exports.save = async(req, res) => {
     const cachesPath = variables.caches.category;
     console.log("🚀 ~ module.exports.save=async ~ cachesPath:", cachesPath)
    console.log('efef');
    
          
     fs.readdir(cachesPath + 'categories',async (err, files) => {
          if (err) throw err;
          for (const file of files) {
               fs.unlink(path.join(cachesPath + 'categories', file), (err) => {
                         if (err) throw err;
               });
          }
     });

     res.send(JSON.stringify('saved'));
}
