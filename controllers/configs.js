const realyze = require('../config').realyze;
const path = require('path')

module.exports.languages = async (req, res) => {
     const result = await realyze("SELECT * FROM `language`");
     res.send(result);
}
module.exports.languageById = async (req, res) => {
     const language = req.params.alias;
     const basePath = path.resolve();     
     res.sendFile(path.resolve(basePath +`/langs/${language}.json`))
}
module.exports.currency = async (req, res) => {
     const result = await realyze("SELECT * FROM `currency`");
     res.send(result);
}


