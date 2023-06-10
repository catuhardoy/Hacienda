const { Router } = require("express")
const {
   getAllDeaths,
} = require("../handlers/deathsHandlers/deathHandler")

const deathsRouter = Router();



deathsRouter.get("/", getAllDeaths)



module.exports = deathsRouter