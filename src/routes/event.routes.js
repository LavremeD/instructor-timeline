const {Router} = require("express")

const EventController = require("../controllers/EventController")

const eventRoutes = Router()
const eventController = new EventController()

eventRoutes.post("/events/:instructor_id/:room_id/:class_id", eventController.createEvent)
eventRoutes.get("/events", eventController.listEvent)
eventRoutes.get("/events/:event_id", eventController.listEventById)
eventRoutes.patch("/events/:event_id", eventController.updateEvent)
eventRoutes.delete("/events/:event_id", eventController.deleteEvent)


module.exports = eventRoutes