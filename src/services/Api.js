import axios from 'axios';

// API helper function to send form data to the backend
export const requestBlood = async (formData) => {
    try {
        const response = await axios.post('https://blood-report-server.onrender.com/api/blood-request', formData);
        return response.data;
    } catch (error) {
        console.error('Error submitting form:', error);
        throw error;
    }
};
// export const updateRequestStatus = async (id, status) => {
//     try {
//         const response = await axios.put(`http://localhost:3333/api/blood-request/update/${id}`, { status });
//         return response.data;
//     } catch (error) {
//         console.error(`Error updating request ${id}:`, error);
//         throw error;
//     }
// };