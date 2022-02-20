import { Observable, Subject } from 'rxjs';

import UserModel from "../model/user.model";

class UserService {

    private user = new Subject<UserModel>();

    changeUser = (): Observable<UserModel> => {
        return this.user.asObservable();
    }

    setUser = (user: UserModel): void => {
        localStorage.setItem("user", JSON.stringify(user))
        this.user.next(this.getUser())
    }

    clearUser = () => {
        localStorage.removeItem("user")
        this.user.next(this.getUser())
    }

    getUser = (): UserModel => {
        const storage = localStorage.getItem("user") || "{}"
        const user: UserModel = JSON.parse(storage)
        return user
    }

    getToken = (): string | undefined => {
        const user: UserModel = this.getUser()
        if (user && user.accessToken) {
            return user.accessToken
        } else {
            return undefined;
        }
    }

    isLoggedIn = (): boolean => {
        const user: UserModel = this.getUser()
        return !!(user && user.status === 'ACTIVE')
      }
    
    isExpired = (): boolean => {
        const user: UserModel = this.getUser()
        return !!(user && user.status === 'EXPIRED')
    }

}

export default new UserService()