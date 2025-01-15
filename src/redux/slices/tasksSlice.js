import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { task, priority } = action.payload;
      state.push({
        id: new Date().toISOString(), // Unique ID based on current timestamp
        task,
        priority,
      });
    },
    deleteTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, deleteTask } = tasksSlice.actions;

export default tasksSlice.reducer;
