import { Navigate, useLocation } from 'react-router-dom';

import React from "react";
import userService from "../services/user.service";

interface ProtectedRouteProps {
    roles?: string[]
    children: JSX.Element
}

const ProtectedRoute: React.FunctionComponent<ProtectedRouteProps> = ({ roles, children }) => {

    const location = useLocation()

    const requireRole = (): boolean => {
        return !(roles === undefined || userService.hasAnyRole(roles))
    }

    if (!userService.isLoggedIn() || userService.isExpired()) {
        return (<Navigate to={"/login"} state={{ from: location }} replace />)
    } else if (requireRole()) {
        return (<Navigate to={"/not-found"} state={{ from: location }} replace />)
    } else {
        return (children)
    }
}

export default ProtectedRoute;