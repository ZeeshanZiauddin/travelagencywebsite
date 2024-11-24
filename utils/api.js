/** @format */

import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Function to make an authenticated API call
export const sendQuery = async (data, url) => {
  try {
    const payload = {
      ...data,
      api_key: process.env.NEXT_PUBLIC_API_KEY, // Add api_key here
    };

    console.log("Payload being sent:", payload);

    const response = await api.post(url, payload);

    return response.data;
  } catch (error) {
    console.error("API call failed on " + url);

    throw error;
  }
};

export const getQuery = async (url) => {
  try {
    const payload = {
      headers: {
        api_key: process.env.NEXT_PUBLIC_API_KEY, // Add the api_key in headers
      },
    };

    const response = await api.get(url, payload);

    return response;
  } catch (error) {
    console.error("API call failed on " + url);

    throw error;
  }
};
