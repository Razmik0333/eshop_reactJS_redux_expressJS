const bcrypt = require('bcrypt')
const path = require('path')
const fsPromises = require('fs/promises')
const realyze = require('../config').realyze


module.exports.userById = async (req, res) => {
     const userId = req.params.id;
     const users = await realyze("SELECT * FROM `user` WHERE `id`= ? ", [userId]);
     res.send(users)
}

module.exports.login = async (req, res) => {     
     const [email, password] = [req.body.email, req.body.password]
     const [user] = await realyze("SELECT * FROM `user` WHERE `email`= ? ", [email]);
     console.log(user['id']);
     
     if(user && await bcrypt.compare(password, user.password)){
          //req.session.user = user;
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
          res.send('1')
     }else{
          res.send('0')
     }
}

module.exports.avatar = async (req, res) => {
    // console.log(  `/images/users/${req.body.user_id}`);
    try {
     const url = `/images/users/${req.body.user_id}`
     const files =  await fsPromises.readdir(`public${url}`)
     console.log("🚀 ~ file: user.js:44 ~ module.exports.avatar= ~ files:", files)
     res.send(JSON.stringify(`${url}/${files[files.length - 1]}`))
         
    } catch (error) {
         console.log(error);
    }
     //res.send(req.body.user_id))
     
}

