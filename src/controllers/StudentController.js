const Student = require('../models/Student');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {

 async list(request, response){
    const student = await Student.find();

    return response.json(student);
 },  

 async delete(request, response){
   const { cpf } = request.query;
   
   await Student.deleteOne({cpf : cpf}, (err, result) => {
      
      if(result.deletedCount == 0) return response.status(400).json({
         error: true,
         message: "Aluno não registrado"
      });

      return response.json({
         error: false,
         message: "Aluno apagado com sucesso"
      });
   });
 },

 async register(request, response) {
    const { name, cpf, birth_date, courses} = request.body;
    
    let student = await Student.findOne({ cpf });

    if(!student){

      const courseArray = parseStringAsArray(courses);
    
      student = await Student.create({
           name,
           cpf,
           birth_date,
           courses: courseArray,
        })
    }

    return response.json(student);
 },

 async update(request, response){
   const { name, cpf, birth_date, courses} = request.body;

   Student.updateOne(
      { "cpf": cpf},
      { "birth_date": birth_date, "name": name}
  )
  .then((obj) => {
      console.log('Updated');
      return response.json({
         message: "Alteração realizada com sucesso"
      });
  })
  .catch((err) => {
   return response.json({
      message: "Alteração não realizada" + err
   });
  })
 }
};