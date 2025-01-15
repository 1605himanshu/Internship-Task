import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../redux/slices/tasksSlice";
import axios from "axios";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();


 // Create a shallow copy of tasks and then sort
 const sortedTasks = [...tasks].sort((a, b) => {
    const priorityOrder = { High: 3, Medium: 2, Low: 1 };
    return priorityOrder[b.priority] - priorityOrder[a.priority];
  });

  const [weather, setWeather] = useState(null);
  const city = "kanpur"; // You can make this dynamic
  const apiKey = "b02c4ab7d508d8896db80f7c34519a42"; // Ensure this is your valid OpenWeather API key

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        setWeather(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error.response);
      }
    };

    fetchWeather();
  }, [city, apiKey]);
   


  return (
    <div className="task-list">
     {sortedTasks.map((task) => (
        <div key={task.id} className={`task-item ${task.priority}`}>
          <span>{task.task}</span>
          <span className="priority">{task.priority}</span> {/* Displaying priority */}
          <button
            onClick={() => dispatch(deleteTask(task.id))}
            className="btn btn-danger"
          >
            Delete
          </button>
        </div>
      ))}
      {weather && (
        <div className="weather">
          <h5>Weather in {weather.name}</h5>
          <p>{weather.weather[0].description}</p>
          <p>{Math.round(weather.main.temp)}°C</p>
        </div>
      )}
    </div>
  );
};

export default TaskList;
