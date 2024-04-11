const {Router} = require("express")

const ClassController = require("../controllers/ClassController")

const classRoutes = Router()
const classController = new ClassController()

classRoutes.post("/class/:adm_id", classController.createClass)
classRoutes.get("/class", classController.listClass)
classRoutes.get("/class/:id", classController.listClassById)
classRoutes.patch("/class/:id", classController.updateClass)
classRoutes.delete("/class/:id", classController.deleteClass)

module.exports = classRoutes