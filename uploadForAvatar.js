const fs = require('fs')
const fsPromises = require('fs/promises')
const path = require('path')
const multer = require('multer');
const usersPath = path.resolve() + `/public/images/users/`;

const storage = multer.diskStorage({
     destination: async (req, file, cb) => {

          try {
               const userId = file.fieldname;
               if(!fs.existsSync(usersPath + `${userId}`)){
                    fs.mkdirSync(usersPath + `${userId}`);
               }
               else{
                    fs.readdir(usersPath + `${userId}`, (err, files) => {
                         if (err) throw err;
                       
                         for (const file of files) {
                           fs.unlink(path.join(usersPath + `${userId}`, file), (err) => {
                             if (err) throw err;
                           });
                         }
                       });

               }
               
               cb(null, usersPath + `${userId}`)

               
          } catch (e) {
               console.log(e);
          }
           
     },
     filename: async (req, file, cb) => {
          const uniqueSuffix = `user_${file.fieldname}_${Date.now()}.jpg`//Date.now() + '-' + file.originalname;
          cb(null, uniqueSuffix)
     }
})


const upload = multer({storage})


module.exports.uploadAvatar = upload
