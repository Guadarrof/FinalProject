import axios from "axios";
const PROJECT_TOKEN= '663840b14253a866a24d2846';

const axiosInstance = axios.create({
    baseURL:`https://${PROJECT_TOKEN}.mockapi.io/toyApi`
})

axios.interceptors.request.use(
    (config)=>{
        return config
    },
    error =>{
        return Promise.reject(error);
    }
)

export const getToys = async () => {
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