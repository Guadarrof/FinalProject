import axios from "axios";

const axiosInstance = axios.create({
    baseURL:`https://localhost:${PORT}/api`
})

axios.interceptors.request.use(
    (config)=>{
        return config
    },
    error =>{
        return Promise.reject(error);
    }
)

export const getProducts = async () => {
    const resp = await axiosInstance.get("/products")
    return resp.data;
}

export const postMessage = async body => {
    const resp = await axiosInstance.post("/messages", body)
    return resp.data;
} 

export const postProducts = async body => {
    const resp = await axiosInstance.post("/products", body)
    return resp.data;
} 