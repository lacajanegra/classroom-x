import { Link, useNavigate } from "react-router-dom";

import { Subscription } from 'rxjs';
import UserModel from '../model/user.model';
import authService from "../services/auth.service";
import { useState } from "react";
import userService from "../services/user.service";

const NavBar: React.FunctionComponent = () => {

  const [user, setUser] = useState<UserModel>()
  const subscriptionLogin: Subscription = userService.changeUser().subscribe(setUser);
  const navigate = useNavigate()

  const logout = async () => {
    await authService.logout()
    navigate("/login", { replace: true })
  }

  const loginLink = !userService.isLoggedIn() ? (
    <li className="nav-item">
      <Link to={"/login"} className="nav-link">Autenticarse</Link>
    </li>
  ) : (<span></span>)

  const registerLink = !userService.isLoggedIn() ? (
    <li className="nav-item">
      <Link to={"/register"} className="nav-link">Registrarse</Link>
    </li>
  ) : (<span></span>)

  const logoutLink = userService.isLoggedIn() ? (
    <li className="nav-item">
      <Link onClick={logout} to={''} className="nav-link">Salir</Link>
    </li>
  ) : (<span></span>)

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/home"} className="navbar-brand">ClassroomX</Link>
        <div className="navbar-nav mr-auto">
          {loginLink}
          {registerLink}
        </div>
        <div className="navbar-nav ms-auto ml-auto">
          {logoutLink}
        </div>
      </nav>

    </div>
  )
}

export default NavBar
