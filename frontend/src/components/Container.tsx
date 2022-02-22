import { Navigate, Route, Routes } from 'react-router-dom';

import Home from './Home';
import Login from './Login';
import NotFound from './NotFound';
import Register from './Register';
import ResetPassword from './ResetPassword';
import AdminCourses from './course/AdminCourses';
import ProtectedRoute from './common/ProtectedRoute';
import AdminStudents from './student/AdminStudents';
import AdminTeachers from './teacher/AdminTeachers';
import AdminTeacherCourses from './teacher/AdminTeacherCourses';
import AdminTeacherCourseView from './teacher/AdminTeacherCourseView';
import AdminStudentCourses from './student/AdminStudentCourses';


const Container: React.FunctionComponent = () => {

  return (
    <div className="container">
      <div className="mt-4">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/courses" element={<ProtectedRoute roles={['ADMIN']}><AdminCourses /></ProtectedRoute>} />
          <Route path="/students" element={<ProtectedRoute roles={['ADMIN']}><AdminStudents /></ProtectedRoute>} />
          <Route path="/teachers" element={<ProtectedRoute roles={['ADMIN']}><AdminTeachers /></ProtectedRoute>} />
          <Route path="/teacher-courses" element={<ProtectedRoute roles={['TEACHER']}><AdminTeacherCourses /></ProtectedRoute>} />
          <Route path="/teacher-course/:id" element={<ProtectedRoute roles={['TEACHER']}><AdminTeacherCourseView /></ProtectedRoute>} />
          <Route path="/student-courses" element={ <ProtectedRoute roles={['STUDENT']}><AdminStudentCourses /></ProtectedRoute>} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </div>
  )
}

export default Container