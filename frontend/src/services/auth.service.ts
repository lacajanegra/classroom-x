import CreateUserModel from "../model/create-user.model";
import LoginModel from "../model/login.model";
import ResetPasswordModel from '../model/reset-password.model';
import UserModel from "../model/user.model";
import authHeader from "./auth-header";
import axios from "axios";
import backendService from "./backend.service";
import userService from "./user.service";

class AuthService {

    private url: string = backendService.getUrl() + "/auth/"

    register = async (request: CreateUserModel, userType: string): Promise<void> => {
        await axios.post<void>(this.url + "signup/" + userType, request);
        userService.clearUser()
    }

    login = async (request: LoginModel): Promise<UserModel> => {
        const response = await axios.post<UserModel>(this.url + "signin", request);
        userService.setUser(response.data)
        return response.data
    }

    reset = async (request: ResetPasswordModel): Promise<void> => {
        await axios.post<void>(this.url + "reset", request, { headers: authHeader() });
        userService.clearUser()
    }

    logout = async (): Promise<void> => {
        await axios.post<void>(this.url + "signout", {}, { headers: authHeader() })
        userService.clearUser()
    }
}

export default new AuthService()