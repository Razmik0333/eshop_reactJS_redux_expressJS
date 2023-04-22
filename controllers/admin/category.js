const realyze = require('../../config').realyze



module.exports.categoryList = async(req, res) => {
     const categoryList = await realyze("SELECT * FROM category ")
     res.send(categoryList);
}
module.exports.create =  async(req, res) => {
     const body = req.body;
     await realyze("INSERT INTO `category` (alias, arm_name) VALUES ( ?, ? )",[body.alias, body.arm_name ])
     res.send('0')
}
module.exports.update =  async(req, res) => {
     const body = req.body;
     //const [alias, arm_name, id] =  
     console.log(req.body);
     await realyze("UPDATE `category` SET `alias` = ?, `arm_name` = ?  WHERE `id` = ? ", [body.alias, body.arm_name, body.id ]);

     res.send('0')

}

module.exports.delete = async(req, res) => {
     const body = req.body;
     await realyze("DELETE FROM category WHERE id = ?", [body.id]);
     res.send('0')
}
