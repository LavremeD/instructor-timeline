const {Router} = require("express")

const InstructorController = require("../controllers/InstructorController")

const instructorRoutes = Router()
const instructorController = new InstructorController()

instructorRoutes.post("/instructors/:adm_id", instructorController.createInstructor)
instructorRoutes.get("/instructors", instructorController.listInstructor)
instructorRoutes.get("/instructors/:instructor_id", instructorController.listInstructorById)
instructorRoutes.patch("/instructors/:instructor_id", instructorController.updateInstructor)
instructorRoutes.delete("/instructors/:instructor_id", instructorController.deleteInstructor)

module.exports = instructorRoutes