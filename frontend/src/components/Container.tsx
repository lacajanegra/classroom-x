import { Navigate, Route, Routes } from 'react-router-dom';

import Home from './Home';
import Login from './Login';
import NotFound from './NotFound';
import ProtectedRoute from './ProtectedRoute';
import Register from './Register';
import ResetPassword from './ResetPassword';
import AdminCourses from './AdminCourses';
import AdminTeachers from './AdminTeachers';
import AdminStudents from './AdminStudents';
import AdminTeacherCourses from './AdminTeacherCourses';
import AdminTeacherCourseView from './AdminTeacherCourseView';

const Container: React.FunctionComponent = () => {

  return (
    <div className="container">
      <Routes>
        <Route path="/login" element={<Login />}  />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/not-found" element={<NotFound />}  />
        <Route path="/home" element={ <ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/courses" element={ <ProtectedRoute roles={['ADMIN']}><AdminCourses /></ProtectedRoute>} />
        <Route path="/students" element={ <ProtectedRoute roles={['ADMIN']}><AdminStudents /></ProtectedRoute>} />
        <Route path="/teachers" element={ <ProtectedRoute roles={['ADMIN']}><AdminTeachers /></ProtectedRoute>} />
        <Route path="/teacher-courses" element={ <ProtectedRoute roles={['TEACHER']}><AdminTeacherCourses /></ProtectedRoute>} />
        <Route path="/teacher-course/:id" element={ <ProtectedRoute roles={['TEACHER']}><AdminTeacherCourseView /></ProtectedRoute>} />
        {/* <Route path="/student-courses" element={ <ProtectedRoute roles={['STUDENT']}><TeacherCourses /></ProtectedRoute>} /> */}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </div>
  )
}

export default Container