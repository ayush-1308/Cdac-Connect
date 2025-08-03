import axios from 'axios';

const API_URL = import.meta.env.VITE_BACKEND_API_URL || 'http://localhost:8080';
console.log('API URL:', API_URL);

// Create axios instance
const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true // Important for handling cookies cross-origin
});

// Response interceptor for global error handling
api.interceptors.response.use(
    (response) => response,
    (error) => {
        // Global error handling
        if (error.response) {
            switch (error.response.status) {
                case 401: // Unauthorized
                    // Redirect to login or logout
                    authService.logout();
                    window.location.href = '/login';
                    break;
                case 403: // Forbidden
                    console.error('Access forbidden');
                    break;
                case 404: // Not Found
                    console.error('Resource not found');
                    break;
                case 500: // Internal Server Error
                    console.error('Server error');
                    break;
            }
        } else if (error.request) {
            // Request made but no response received
            console.error('No response received', error.request);
        } else {
            // Something happened in setting up the request
            console.error('Error setting up request', error.message);
        }
        return Promise.reject(error);
    }
);

const generateUserColor = () => {
    const colors = [
        '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
        '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9'
    ]
    return colors[Math.floor(Math.random() * colors.length)];
}

export const authService = {

    login: async (username, password) => {
        try{

            const response = await api.post('/auth/login', {
                username,
                password
            });

            //After successful login
            const userColor = generateUserColor();
            const userData = {
                ...response.data,
                color: userColor,
                loginTime: new Date().toISOString()
            };

            localStorage.setItem('currentUser', JSON.stringify(userData));
            localStorage.setItem('user', JSON.stringify(response.data));

            return{
                success: true,
                user: userData
            };

        }
        catch(error){
            console.error('Login failed', error);
            const errorMessage = error.response?.data?.message || 'Login failed, Please check your credentials';
            throw new errorMessage;
        }
    },

    signup: async(username, email, password) => {
        try{

            const response = await api.post('/auth/signup', {
                username,
                email,
                password
            });

            return{
                success: true,
                user: response.data
            };
        }
        catch (error){
            console.error('Signup failed', error);
            const errorMessage = error.response?.data?.message || 'Signup failed, Please check your credentials';
            throw new errorMessage;
        }
    },
}