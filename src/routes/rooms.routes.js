const {Router} = require("express")

const RoomController = require("../controllers/RoomController")

const roomRoutes = Router()
const roomController = new RoomController()

roomRoutes.post("/rooms/:adm_id", roomController.createRoom)
roomRoutes.get("/rooms", roomController.listRoom)
roomRoutes.get("/rooms/:room_id", roomController.listRoomById)
roomRoutes.patch("/rooms/:room_id", roomController.updateRoom)
roomRoutes.delete("/rooms/:room_id", roomController.deleteRoom)

module.exports = roomRoutes