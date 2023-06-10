const Deaths = require("../../models/deaths");
const cowRoundUp = require("../../models/cowRoundUp");

const getDeaths = async () => {
    const death = await Deaths.find()
                                 .populate(["cowRoundUp"])
                                 .exec()
    return death
 }; 


 module.exports= {
     getDeaths,

 }