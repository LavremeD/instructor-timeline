class ClassDeleteService{
    constructor(classRepository){
        this.classRepository = classRepository
    }
    async execute({id}){
        const classDelete = await this.classRepository.deleteClass({id})
        return classDelete
    }
  }
  
  module.exports = ClassDeleteService