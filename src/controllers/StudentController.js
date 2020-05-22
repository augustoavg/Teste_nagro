const Student = require('../models/Student');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {

 async list(request, response){
    const student = await Student.find();

    return response.json(student);
 },  

 async delete(request, response){
   const { cpf } = request.query;
   if(Student.findOne({cpf:cpf}))
   Student.deleteOne({cpf: cpf}, (err) => {
      if(err) return response.status(400).json({
         error: true,
         message: "Aluno não foi apagado com sucesso"
      });
      console.log(response.status.console);
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
 }
};