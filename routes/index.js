const express   = require("express");
const router    = express.Router();
const todos     = [{task: "example", complete: false, id: 1}];


router.get("/", function(req, res) {
  res.render("index", { todos: todos});
});

router.get("/complete/:taskid", function(req, res) {
  todos[req.params.taskid - 1].complete = true;
  res.redirect("/");
})


router.post("/", function(req, res) {
  let obj = {task: req.body.task, complete: false, id: todos.length + 1};
  todos.push(obj);
  res.redirect("/");
})

module.exports = router;
