import express from 'express';
var router = express.Router();
let todos: Array<string>= [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'ToDo App',
    todos: todos,
  });
});

router.post('/', function(req, res, next) {
  const todo = req.body.add;
  todos.push(todo);
  // res.render('index', { title: 'Todo App'})
  res.redirect('/');
})

export default router;
