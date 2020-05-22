const Student = require('../models/Student');
const Course = require('../models/Course');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {

 async list(request, response){
    const student = await Student.find();

    return response.json(student);
 },  

 async delete(request, response){
   const { cpf } = request.query;

   const studentBio = await Student.findOne({cpf});
   console.log(studentBio.courses);
   const studentCourse = await Course.findById(studentBio.courses);
   console.log(studentCourse);

   await Course.updateOne({ "name": studentCourse.name }, {"students": studentCourse.students.splice(studentBio._id)});
   
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
    let courseExists = await Course.findById(courses);

    if(!courseExists){
       return response.json({
          message:"Curso inexistente."
       })
    }

    if(!student){

      const courseArray = parseStringAsArray(courses);
    
      student = await Student.create({
           name,
           cpf,
           birth_date,
           courses: courseArray,
        })

      await Course.updateOne({ "name": courseExists.name }, {"students": courseExists.students.concat(student._id)});

    }else{
      return response.json({
         message:"Aluno já cadastrado."
      })
    }

    return response.json({student,courseExists});
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