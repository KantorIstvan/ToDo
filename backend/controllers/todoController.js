const todoModel = require("../models/todoModel");

module.exports.getTodos = async (req, res) => {
  const todo = await todoModel.find();
  res.send(todo);
};

module.exports.saveTodo = async (req, res) => {
  const { text } = req.body;

  todoModel.create({ text }).then((data) => {
    console.log("Added successfully");
    console.log(data);
    res.send(data);
  });
};

module.exports.updateTodo = async (req, res) => {
  try {
    const { _id, text } = req.body;
    await todoModel.findByIdAndUpdate(_id, { text });
    res.send("Updated successfully");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error updating todo");
  }
};

module.exports.deleteTodo = async (req, res) => {
  try {
    const { _id } = req.body;
    await todoModel.findByIdAndDelete(_id);
    res.send("Deleted successfully");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error deleting todo");
  }
};
