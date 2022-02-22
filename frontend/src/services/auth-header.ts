import { AxiosRequestHeaders } from "axios";
import UserModel from "../model/user.model";

export default function authHeader(): AxiosRequestHeaders {
    const storage = localStorage.getItem("user") || "{}"
    const user: UserModel = JSON.parse(storage)
    if (user && user.accessToken) {
        return { Authorization: `Bearer ${user.accessToken}` }
    } else {
        return {};
    }
}
