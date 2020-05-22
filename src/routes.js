const { Router } = require('express');

const StudentController = require('./controllers/StudentController');
const CourseController = require('./controllers/CourseController');
const SearchController = require('./controllers/SearchController');
const routes = Router();


routes.post('/students', StudentController.register);
routes.post('/courses', CourseController.register);

routes.delete('/students', StudentController.delete);

routes.put('/students', StudentController.update);

routes.get('/courses', CourseController.list);
routes.get('/students', StudentController.list);
routes.get('/search', SearchController.index);


module.exports = routes;