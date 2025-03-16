import axios from "axios";

const API_URL = "http://localhost:8080/api/tasks"; // Backend URL

// Get all tasks
export const getTasks = async () => {
  return await axios.get(API_URL);
};

// Add a new task
export const addTask = async (task) => {
  return await axios.post(API_URL, task);
};

// Get a single task
export const getTaskById = async (id) => {
  return await axios.get(`${API_URL}/${id}`);
};

// Update a task
export const updateTask = async (id, updatedTask) => {
  return await axios.put(`${API_URL}/${id}`, updatedTask);
};

// Delete a task
export const deleteTask = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};
