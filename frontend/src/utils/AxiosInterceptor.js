import api from "../services/api";

api.interceptors.request.use(
    (request) =>{
        const token = localStorage.getItem(import.meta.env.USER_TOKEN); // get token from LocalStorage

        if(token){
            request.headers.Authorization = `Bearer ${token}` ;
        }

        return request ;

    },
    (error)=>{
        Promise.reject(error);
    }
)

api.interceptors.response.use(
    (response) => response,
    (error)=>{
        if(error.response?.status === 401){
            
            localStorage.removeItem(import.meta.env.USER_TOKEN);

            //later ,  will be navigated to /login
        }
    }
)


export default api ;