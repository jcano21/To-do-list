import axios from 'axios';

const API_BASE_URL = '/to-do';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Agrega el Token a las peticiones 
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Endpoints a utilizar 

export const login = (email) =>
  api.post('/login', { email }).then((res) => res.data.data.token);

export const createTask = (taskData) =>
  api.post('/tasks/create', taskData).then((res) => res.data.data);

export const getTaskById = (taskId) =>
  api.get(`/tasks/${taskId}`).then((res) => res.data.data.task);

export const getTasks = ({ limit = 5, order = '-created_at', page = 1 }) =>
  api
    .get(`/tasks?limit=${limit}&order=${order}&page=${page}`)
    .then((res) => res.data);

export const updateTask = (taskId) =>
  api.patch(`/tasks/update/${taskId}`).then((res) => res.data.data);

export const deleteTask = (taskId) =>
  api.delete(`/tasks/delete/${taskId}`).then((res) => res.data.data);

export default api;