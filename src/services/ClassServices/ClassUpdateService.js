class ClassUpdateService{
    constructor(classRepository){
        this.classRepository = classRepository
    }
    async execute({id, name, period}){
        const classUpdated = await this.classRepository.updateClass({id, name, period})
        return classUpdated
    }
  }
  
  module.exports = ClassUpdateService