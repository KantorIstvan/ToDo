const { Router } = require("express");
const {
  getTodos,
  saveTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");
const router = Router();

router.get("/", getTodos);
router.post("/save", saveTodo);
router.post("/update", updateTodo);
router.post("/delete", deleteTodo);

module.exports = router;
