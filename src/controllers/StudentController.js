const Student = require('../models/Student');
const Course = require('../models/Course');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {

 async list(request, response){
    const student = await Student.find();

    return response.status(200).json(student);
 },  

 async delete(request, response){
   const { tax_id } = request.query;
   
   await Student.deleteOne({tax_id : tax_id}, (err, result) => {
      
      if(result.deletedCount == 0) return response.status(400).json({
         error: true,
         message: "Aluno não registrado"
      });

      return response.status(200).json({
         error: false,
         message: "Aluno apagado com sucesso"
      });
   });
 },

 async register(request, response) {
    const { name, tax_id, birth_date, courses} = request.body;
    
    let student = await Student.findOne({ tax_id });

    const courseArray = parseStringAsArray(courses);

    let courseExists = await Course.findById(courseArray);

    if(!courses){
      return response.status(400).json({
         message: "Curso obrigatório."
      })
    }

    if(!courseExists){
       return response.status(400).json({
          message:"Curso inexistente."
       })
    }

    if(!student){
    
      student = await Student.create({
           name,
           tax_id,
           birth_date,
           courses: courseArray,
        })

      await Course.updateOne({ "name": courseExists.name }, {"students": courseExists.students.concat(student._id)});

    }else{
      return response.status(400).json({
         message:"Cpf já cadastrado."
      })
    }

    return response.status(200).json({student,courseExists});
 },

 async update(request, response){
   const { name, tax_id, birth_date, courses} = request.body;

   let student = await Student.findOne({ tax_id });

   if(!student){
      return response.status(400).json({
         message: "Aluno não registrado."
      });
   }

   Student.updateOne(
      { "tax_id": tax_id},
      { "birth_date": birth_date, "name": name}
  )
  .then((obj) => {
      console.log('Updated');
      return response.status(200).json({
         message: "Alteração realizada com sucesso"
      });
  })
  .catch((err) => {
   return response.status(400).json({
      message: "Alteração não realizada" + err
   });
  })
 }
};