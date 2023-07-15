import React, { createContext, useState } from "react";
import Alert from "react-bootstrap/Alert";

export const TodoContext = createContext(); //creating a contextapi for managing state of data

export const TodoProvider = ({ children }) => {
  //passing child as props
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [Actionss, SetAction] = useState(false);
  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask("");
      setShowAlert(true);
      SetAction(true);
      setAlertMessage("Task Added Successfully!");
    } else {
      setShowAlert(true);
      SetAction(true);
      setAlertMessage("Error Add task!");
    }
  }; //the purpose of addtask function is to add newest task and update the state of tasks by usestate as a hook

  const toggleTask = (id) => {
    if (id) {
      setShowAlert(true);
      SetAction(true);
      setAlertMessage("Task Completed!");
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, completed: !task.completed } : task
        )
      );
    } else {
      setShowAlert(true);
      SetAction(true);
      setAlertMessage("Task Incompleted!");
    }
  }; //for toggletask function will do the mapping of state every time if user complete task or incomplete the task

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    setShowAlert(true);
    SetAction(true);
    setAlertMessage("Task Remove Successfully!");
  }; //the purpose of removetask function is to remove task from state every time if user remove the task

  const completedTasksCount = tasks.filter((task) => task.completed).length; //it will count the completed task

  const todoContextValue = {
    tasks,
    newTask,
    setNewTask,
    addTask,
    toggleTask,
    removeTask,
    completedTasksCount,
  };
  //create a context value for transfering data from another component by through context api
  return (
    <div>
      {showAlert && (
        <Alert
          variant={Actionss ? "success" : "danger"}
          onClose={() => setShowAlert(false)}
          dismissible
        >
          {alertMessage}
        </Alert>
      )}

      <TodoContext.Provider value={todoContextValue}>
        {children}
      </TodoContext.Provider>
    </div>
  );
};
