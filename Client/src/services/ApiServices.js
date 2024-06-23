import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3003/api',
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem('userInfo')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('userInfo')).token}`;
  }
  return req;
});

export const login = (formData) => API.post('/users/login', formData);
export const register = (formData) => API.post('/users/register', formData);

export const fetchMedicines = () => API.get('/medicines');
export const createMedicine = (newMedicine) => API.post('/medicines', newMedicine);
export const updateMedicine = (id, updatedMedicine) => API.put(`/medicines/${id}`, updatedMedicine);
export const deleteMedicine = (id) => API.delete(`/medicines/${id}`);
