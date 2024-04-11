class ClassListByIdService{
    constructor(classRepository){
        this.classRepository = classRepository
    }
    async execute({id}){
        const classList = await this.classRepository.listClassById({id})
        return classList
    }
  }
  
  module.exports = ClassListByIdService