import StorageHandler from "@shared/storageHandeler";
import { isPropEmpty } from "@shared/utilFunction";
import { axiosInstance } from "@store/reducers/axiosSlice";
const storageHandler = new StorageHandler();
export const initRequestInterceptor = ()=>{
    axiosInstance.interceptors.request.use(function (config) {
        if(!isPropEmpty(storageHandler.jwtAccesToken)){
            config.headers['Authorization'] = `Bearer ${storageHandler.jwtAccesToken}`;
        }
        return config;
      }, function (error) {
        // Do something with request error
        return Promise.reject(error);
      });
}