import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import userService from "../services/user.service";

class AxiosInterceptor {

    constructor(axiosInstance: AxiosInstance) {
        axiosInstance.interceptors.request.use(this.onRequest, this.onRequestError);
        axiosInstance.interceptors.response.use(this.onResponse, this.onResponseError);
    }

    private onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
        return config;
    }

    private onRequestError = (error: AxiosError): Promise<AxiosError> => {
        return Promise.reject(error);
    }

    private onResponse = (response: AxiosResponse): AxiosResponse => {
        return response;
    }

    private onResponseError = (error: AxiosError): Promise<AxiosError> => {
        if (error && error.response && error.response.status === 401) {
            userService.clearUser()
        }
        return Promise.reject(error);
    }
}

export default AxiosInterceptor