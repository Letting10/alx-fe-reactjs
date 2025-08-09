import axios from 'axios';

const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY; // Optional

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`, {
      headers: GITHUB_API_KEY ? { Authorization: `token ${GITHUB_API_KEY}` } : {}
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
