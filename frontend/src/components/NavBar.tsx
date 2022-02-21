import { Link, useNavigate } from "react-router-dom";

import authService from "../services/auth.service";
import userService from "../services/user.service";

const NavBar: React.FunctionComponent = () => {

  const navigate = useNavigate()

  const logout = () => {
    authService.logout()
      .finally(() => { userService.clearUser(); navigate("/login", { replace: true }) })
  }

  const loginLink = !userService.isLoggedIn() ? (
    <li className="nav-item">
      <Link to={"/login"} className="nav-link">Autenticarse</Link>
    </li>
  ) : (<span></span>)

  const registerLink = !userService.isLoggedIn() ? (
    <li className="nav-item">
      <Link to={"/register"} className="nav-link">Registro</Link>
    </li>
  ) : (<span></span>)

  const coursesLink = userService.hasAnyRole(['ADMIN']) ? (
    <li className="nav-item">
      <Link to={"/courses"} className="nav-link">Administrar Materias</Link>
    </li>
  ) : (<span></span>)

  const teacherLink = userService.hasAnyRole(['TEACHER']) ? (
    <li className="nav-item">
      <Link to={"/teacher"} className="nav-link">Materias</Link>
    </li>
  ) : (<span></span>)

  const studentLink = userService.hasAnyRole(['STUDENT']) ? (
    <li className="nav-item">
      <Link to={"/student"} className="nav-link">Inscripci&oacute;n de Materias</Link>
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
          {coursesLink}
          {teacherLink}
          {studentLink}
        </div>
        <div className="navbar-nav ms-auto ml-auto">
          {logoutLink}
        </div>
      </nav>

    </div>
  )
}

export default NavBar
