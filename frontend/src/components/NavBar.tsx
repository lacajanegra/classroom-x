import { Link, useNavigate } from "react-router-dom";

import authService from "../services/auth.service";
import userService from "../services/user.service";

const NavBar: React.FunctionComponent = () => {

  const navigate = useNavigate()

  const logout = async () => {
    await authService.logout()
      .finally(() => { userService.clearUser(); navigate("/login", { replace: true }) })
  }

  const coursesLink = userService.hasAnyRole(['ADMIN']) ? (
    <li className="nav-item">
      <Link to={"/courses"} className="nav-link">Materias</Link>
    </li>
  ) : (null)

  const teachersLink = userService.hasAnyRole(['ADMIN']) ? (
    <li className="nav-item">
      <Link to={"/teachers"} className="nav-link">Profesores</Link>
    </li>
  ) : (null)

  const studentsLink = userService.hasAnyRole(['ADMIN']) ? (
    <li className="nav-item">
      <Link to={"/students"} className="nav-link">Estudiantes</Link>
    </li>
  ) : (null)

  const teacherCoursesLink = userService.hasAnyRole(['TEACHER']) ? (
    <li className="nav-item">
      <Link to={"/teacher-courses"} className="nav-link">Ense&ntilde;ar</Link>
    </li>
  ) : (null)

  const studentCoursesLink = userService.hasAnyRole(['STUDENT']) ? (
    <li className="nav-item">
      <Link to={"/student-courses"} className="nav-link">Aprender</Link>
    </li>
  ) : (null)

  const logoutLink = userService.isLoggedIn() ? (
    <li className="nav-item">
      <Link onClick={async () => { await logout() }} to={''} className="nav-link">Salir</Link>
    </li>
  ) : (null)

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/home"} className="navbar-brand">ClassroomX</Link>
        <div className="navbar-nav">
          {coursesLink}
          {teachersLink}
          {studentsLink}
          {teacherCoursesLink}
          {studentCoursesLink}
        </div>
        <div className="navbar-nav ms-auto ml-auto">
          {logoutLink}
        </div>
      </nav>
    </div>
  )
}

export default NavBar
