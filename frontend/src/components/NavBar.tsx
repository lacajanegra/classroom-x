import { Link, useNavigate } from "react-router-dom";

import authService from "../services/auth.service";
import userService from "../services/user.service";

const NavBar: React.FunctionComponent = () => {

  const navigate = useNavigate()

  const logout = async () => {
    await authService.logout()
      .finally(() => { userService.clearUser(); navigate("/login", { replace: true }) })
  }

  const logoutLink = userService.isLoggedIn() ? (
    <li className="nav-item">
      <Link onClick={async () => { await logout() }} to={''} className="nav-link">Salir</Link>
    </li>
  ) : (null)

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/home"} className="navbar-brand">ClassroomX</Link>
        <div className="navbar-nav ms-auto ml-auto">
          {logoutLink}
        </div>
      </nav>
    </div>
  )
}

export default NavBar
