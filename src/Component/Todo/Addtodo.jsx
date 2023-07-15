import React, { useContext } from "react";
import { TextField, Button } from "@mui/material";
import { TodoContext } from "./TodoProvider";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

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
      <h2>To-Do</h2>
      <TextField
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a new task"
        required
        size="small"
      />{" "}
      <Button variant="contained" onClick={addTask} size="large">
        Add Task
      </Button>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Sr.No</TableCell>
                <TableCell>Added Task</TableCell>
                <TableCell>Remove Task</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tasks.map((task, index) => (
                <TableRow key={task.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleTask(task.id)}
                    />
                    <span
                      style={{
                        textDecoration: task.completed
                          ? "line-through"
                          : "none",
                      }}
                    >
                      {task.text}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={() => removeTask(task.id)}
                      variant="outlined"
                      size="small"
                    >
                      Remove
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "16px" }}
      >
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Track the Task</TableCell>
                <TableCell>Count</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Total Tasks</TableCell>
                <TableCell>{tasks.length}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Completed Tasks</TableCell>
                <TableCell>{completedTasksCount}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default AddTodo;
