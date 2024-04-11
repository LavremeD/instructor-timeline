const {Router} = require("express")

const AdmController = require("../controllers/AdmController")

const admRoutes = Router()
const admController = new AdmController()

admRoutes.post("/adm", admController.createAdm)
admRoutes.get("/adm", admController.listAdm)
admRoutes.get("/adm/:adm_id", admController.listAdmById)
admRoutes.patch("/adm/:adm_id", admController.updateAdm)
admRoutes.delete("/adm/:adm_id", admController.deleteAdm)

module.exports = admRoutes