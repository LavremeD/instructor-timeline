const knex = require("../../database/knex")

class ClassRepository{
    async createClass({name, period, adm_id}){
        const class_id = await knex("class").insert({name, period, adm_id})
        return {id: class_id}
    }
    async listClass(){
        const classRoom = await knex("class")
        return classRoom
    }
    async listClassById({id}){
        const classRoom = await knex("class").where({id})
        return classRoom
    }
    async updateClass({id, name, period}){
        const classRoom = await knex("class").where({id})

        classRoom.name = name ?? classRoom.name
        classRoom.period = period ?? classRoom.period

        await knex("class").where({id}).update({name: classRoom.name,period: classRoom.period})

        return classRoom
    }
    async deleteClass({id}){
        const classRoom = await knex("class").where({id}).delete()
        return classRoom
    }
}
module.exports = ClassRepository