import CreateUserModel from "../model/create-user.model";
import LoginModel from "../model/login.model";
import ResetPasswordModel from '../model/reset-password.model';
import UserModel from "../model/user.model";
import authHeader from "./auth-header";
import axios, { AxiosResponse } from "axios";
import backendService from "./backend.service";

class AuthService {

    private url: string = backendService.getUrl() + "/auth/"

    login = (request: LoginModel): Promise<AxiosResponse<UserModel>> => {
        return axios.post<UserModel>(this.url + "signin", request)
    }

    reset = (request: ResetPasswordModel): Promise<AxiosResponse<void>> => {
        return axios.post(this.url + "reset", request, { headers: authHeader() })
    }

    register = (request: CreateUserModel, userType: string): Promise<AxiosResponse<void>> => {
        return axios.post(this.url + "signup/" + userType, request, { headers: authHeader() })
    }

    logout = (): Promise<AxiosResponse<void>> => {
        return axios.post(this.url + "signout", {}, { headers: authHeader() })
    }
}

export default new AuthService()