import { Navigate, Route, Routes } from 'react-router-dom';

import Home from './Home';
import Login from './Login';
import NotFound from './NotFound';
import ProtectedRoute from './ProtectedRoute';
import Register from './Register';
import ResetPassword from './ResetPassword';

const Container: React.FunctionComponent = () => {

  return (
    <div className="container">
      <Routes>
        <Route path="/login" element={<Login />}  />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/home" element={ <ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/not-found" element={<NotFound />}  />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </div>
  )
}

export default Container