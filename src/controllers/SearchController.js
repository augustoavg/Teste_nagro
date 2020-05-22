const Course = require('../models/Course');
const Student = require('../models/Student');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index( request, response){
        const { courses } = request.query;

        const coursesArray = parseStringAsArray(courses);
        
        console.log(coursesArray);
        const students = await Student.find ({
            courses:{
                $in: coursesArray,
            },
        });

        return response.json({ students });
    }
}
