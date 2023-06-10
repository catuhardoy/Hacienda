const {
getDeaths,
} = require("../../deathsControllers/deathController");

 

const getAllDeaths = async (req, res) => {
    try {
        const death = await getDeaths();
        console.log(death);
        return res.status(200).json(death)
    } catch (error) {
        
        return res.status(400).json({error: error.message})
    }
};

module.exports={
    getAllDeaths,
}