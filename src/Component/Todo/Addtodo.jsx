import React, { useContext } from "react";
import { Input } from "@mui/material";
import { Button } from "react-bootstrap";
import { TodoContext } from "./TodoProvider";

const AddTodo = () => {
  const {
    tasks,
    newTask,
    setNewTask,
    addTask,
    toggleTask,
    removeTask,
    completedTasksCount,
  } = useContext(TodoContext);

  return (
    <div>
      <h2>To-Do List</h2>
      <Input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a new task"
      />
      <Button onClick={addTask}>Add Task</Button>
      <p>Total Tasks: {tasks.length}</p>
      <p>Completed Tasks: {completedTasksCount}</p>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.text}
            </span>
            <Button onClick={() => removeTask(task.id)}>Remove</Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddTodo;
