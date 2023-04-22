const realyze = require('../config').realyze;

module.exports.category = async (req, res) => {
     const result = await realyze("SELECT * FROM `category`");
     res.send(result);
}

module.exports.categoryById = async (req, res) => {
     const id = req.params.id;
     const result = await realyze("SELECT * FROM `category` WHERE `id`= ? ", [id]);
     res.send(result);
}
