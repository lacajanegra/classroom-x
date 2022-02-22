import UserModel from "../model/user.model";

class UserService {

    setUser = (user: UserModel): void => {
        localStorage.setItem("user", JSON.stringify(user))
    }

    clearUser = () => {
        localStorage.removeItem("user")
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

    hasAnyRole = (roles: string[]): boolean => {
        const user: UserModel = this.getUser()
        return this.isLoggedIn() && !this.isExpired() && !!(user && user.roles && user.roles.some(r => roles.indexOf(r) >= 0))
    }

}

export default new UserService()