import axios from 'axios';

const API_URL = 'http://localhost:3000/api'; // Your Node.js API URL

export const postLogin = async () => {
  try {
    const response = await axios.post(`${API_URL}/login`);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

// Add more functions to make other API requests as needed
