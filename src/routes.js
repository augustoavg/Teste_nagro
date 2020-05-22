const { Router } = require('express');

const StudentController = require('./controllers/StudentController');
const CourseController = require('./controllers/CourseController');
const SearchController = require('./controllers/SearchController');

const routes = Router();


routes.post('/students', StudentController.register); //ok
routes.post('/courses', CourseController.register); //ok

routes.delete('/students', StudentController.delete); //ok

routes.put('/students', StudentController.update); //ok

routes.get('/courses', CourseController.list); //ok
routes.get('/students', StudentController.list); //ok
routes.get('/search', SearchController.index); //ok


module.exports = routes;