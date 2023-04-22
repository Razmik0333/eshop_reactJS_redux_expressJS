const bcrypt = require('bcrypt')


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
     const bool = 
       await realyze("INSERT INTO `user` (login, password, email, name, gender, role, time_add) VALUES ( ?, ?, ?, ?, ?, ?, ?) ",
       [user.login, passwordHash, user.email, user.name, user.gender,'user', Date.now()]);
     res.send('0')
}
