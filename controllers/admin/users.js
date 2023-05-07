const realyze = require('../../config').realyze

module.exports.usersList = async(req, res) => {
     //const id = req.params.id; //
     const users = await realyze("SELECT id, login, email, name, gender, role, time_add FROM user ")
    res.send(users)
}

