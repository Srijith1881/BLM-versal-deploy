import axios from "axios";
import { server_API } from "../server";

// API helper function to send form data to the backend
export const requestBlood = async (formData) => {
  try {
    const response = await axios.post(
      `${server_API}/post-blood-data`,
      formData
    );
    return response.data;
  } catch (error) {
    console.error("Error submitting form:", error);
    throw error;
  }
};
