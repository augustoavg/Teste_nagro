const Course = require('../models/Course');
const mongoose = require('mongoose');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {

 async list(request, response){
    const courses = await Course.find();

    return response.status(200).json(courses);
 },  
    
 async register(request, response) {
    const { name, students } = request.body;
    
    let course = await Course.findOne({ name });

    if(!course){

        course = await Course.create({
           name,
           students: students
        })
    }

    return response.status(200).json(course);
 }
};