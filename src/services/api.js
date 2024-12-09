import axios from "axios";

const API_BASE_URL = "http://localhost:3001";

export const fetchData = async (endpoint) => {
    const response = await axios.get(`${API_BASE_URL}/${endpoint}`);
    return response.data;
};

export const postData = async (endpoint, data) => {
    const response = await axios.post(`${API_BASE_URL}/${endpoint}`, data);
    return response.data;
};

export const updateData = async (endpoint, id, data) => {
    const response = await axios.put(`${API_BASE_URL}/${endpoint}/${id}`, data);
    return response.data;
};

export const deleteData = async (endpoint, id) => {
    const response = await axios.delete(`${API_BASE_URL}/${endpoint}/${id}`);
    return response.data;
};
