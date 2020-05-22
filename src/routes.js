const { Router } = require('express');

const StudentController = require('./controllers/StudentController');
const CourseController = require('./controllers/CourseController');
const SearchController = require('./controllers/SearchController');
const routes = Router();

//routes.get('/students', StudentController.list);
routes.post('/students', StudentController.register);
routes.delete('/students', StudentController.delete);
// routes.post('/students', StudentController.update);
routes.get('/courses', CourseController.list);
routes.post('/courses', CourseController.register);
routes.get('/search', SearchController.index);


module.exports = routes;