import axios from 'axios'

const baseUrl = "https://fullstack-todo-app-yt-backend.onrender.com"

const getUser = async () => {
    try {
        const response = await axios.get(`${baseUrl}/`);
        const data = response.data;
        console.log('data ---> ', data);
    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
};


export {
    getUser
}