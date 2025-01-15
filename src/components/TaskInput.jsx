import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/slices/tasksSlice";

const TaskInput = () => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task) {
      dispatch(addTask({ task, priority }));
      setTask("");
      setPriority("Medium");
    }
  };

  return (
    <div className="task-input">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
        className="form-control"
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="form-select"
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button onClick={handleAddTask} className="btn btn-primary">
        Add Task
      </button>
    </div>
  );
};

export default TaskInput;