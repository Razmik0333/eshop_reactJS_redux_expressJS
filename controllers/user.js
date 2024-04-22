const fs = require('fs');
const fsPromises = require('fs/promises');
const path = require('path');
const bcrypt = require('bcrypt');
const mailer = require('../nodemailer');
const functions = require('../functions/functions');
const getMessageObjectAuth = functions.messageObjectAuth;
const variables = require('../variables/variables');
const realyze = require('../config').realyze;



module.exports.userById = async (req, res) => {
     try {
          const userId = req.params.id;
          
          const users = await realyze("SELECT * FROM `user` WHERE `id`= ? ", [userId]);
          const [modDataUser] = await Promise.all(users.map(async(item) => {
               const url = `public/images/users/${userId}`;
               const files = fs.existsSync(url) ? await fsPromises.readdir(url) : []
               return await {
                    ...item,
                    picture:files,
               }
          }))
          res.send(modDataUser)
          
     } catch (error) {
          console.log(error);
          
     }
     //res.send(users)
}

module.exports.login = async (req, res) => {     
     const [email, password] = [req.body.email, req.body.password]
     const [user] = await realyze("SELECT * FROM `user` WHERE `email`= ? ", [email]);
     console.log(user);
     
     if(user && await bcrypt.compare(password, user.password)){
          //req.session.user = user;
          const message = getMessageObjectAuth(req.body.email, "login")
          await mailer(message);
          res.send(`${user.id}`);
     }else{
          res.send('0');
     }
}


module.exports.register = async (req, res) => {
     const user = req.body;
     const passwordHash = await bcrypt.hash(user.password, 10)
     const emailExist = await realyze("SELECT * FROM `user` WHERE `email` = ? OR `login` = ? ", [user.email, user.login])
     if(emailExist.length === 0){
          await realyze("INSERT INTO `user` (login, password, email, name, gender, role, time_add) VALUES ( ?, ?, ?, ?, ?, ?, ?) ",
          [user.login, passwordHash, user.email, user.name, user.gender,'user', Date.now()]);
          const message = getMessageObjectAuth(user.email, "register");
          await mailer(message);

          res.send('1')
     }else{
          res.send('0')
     }
}

module.exports.avatar = async (req, res) => {
     const usersPath = path.resolve() + `/public/images/users/`;
     const userId = req.body.userId;
     try {
          if(!fs.existsSync(usersPath + `${userId}`)){
               fs.mkdirSync(usersPath + `${userId}`);
          }
          else{
               const url = usersPath + `${userId}/avatar_${Date.now()}.jpg`

               const data = req.body.preview.replace(/^data:image\/\w+;base64,/, '');
               fs.readdir(usersPath + `${userId}`,async (err, files) => {
                    if (err) throw err;
                    if(files.length > 0){
                         for (const file of files) {
                         
                              fs.unlink(path.join(usersPath + `${userId}`, file), (err) => {
                                   if (err) throw err;

                                   fs.writeFile(url,data,{encoding:'base64'}, async function(err) {
                                         if (err) throw err;
                                         else {
                                              const avatars =  await fsPromises.readdir(`public/images/users/${userId}`)
                                              res.send(JSON.stringify(`${avatars[0]}`))
                                         }
                                    })
                              });
                         }
                    }else{

                          fs.writeFile(url,data,{encoding:'base64'}, async function(err) {
                              if (err) throw err;
                              else {
                                   const avatars =  await fsPromises.readdir(`public/images/users/${userId}`)
                                   res.send(JSON.stringify(`${avatars[0]}`))
                              }
                         }) 
                    }
               });
          }
     } catch (error) {
         console.log(error);
     }
}

module.exports.name = async ( req, res) => {     
     const userName = req.body.user_name;
     const userId = req.body.user_id;
     await realyze("UPDATE user SET name = ? WHERE id = ?", [userName, userId]);
     const [newUserName] = await realyze("SELECT * FROM user WHERE id = ?", [userId]);
     res.send(JSON.stringify(newUserName['name']));
}
module.exports.clearCaches = async ( req, res) => { 
     const userId = req.params.id;   
     const userPaths = variables.cachesUser ;
     userPaths.forEach(item => {
          if (fs.existsSync(item + userId)) {
               fs.readdir(item + userId,async (err, files) => {
                    if (err) throw err;               
                    for (const file of files) {
                         fs.unlink(path.join(item + userId, file), (err) => {
                                   if (err) throw err;
                         });
                    }
               });
          }
     })     
     res.send(JSON.stringify('Cleared'));
}

module.exports.notice = async(req, res) => {
     const email = req.body.email;
     const emailExist = await realyze("SELECT * FROM notice WHERE email = ? ", [email])
     if(email && emailExist.length === 0){
          await realyze("INSERT INTO notice ( email, time_add) VALUES( ? ,? )", [email, Date.now()]);
          res.send('1');
     }else{
          res.send('0')
     }
     
     //console.log("🚀 ~ module.exports.notice=async ~ emailExist:", Boolean(emailExist))
}
