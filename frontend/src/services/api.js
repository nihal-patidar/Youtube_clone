import axios from "axios";


console.log('import.meta - ',import.meta);


// create request instance with baseUrl, timeout, headers.
const api = axios.create({
    baseURL : import.meta.env.VITE_API_BASE_URL,
    timeout : 10000,
    headers : {
        'Content-Type' : "application/json"
    }
});

export default api ;

