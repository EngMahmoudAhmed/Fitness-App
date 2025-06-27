import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, requireAdmin = false }) => {
    const token = localStorage.getItem('auth_token');
    let user = null;

    try {
        user = JSON.parse(localStorage.getItem('auth_user'));
    } catch {
        user = null;
    }

    if (!token || !user) {
        return <Navigate to="/login" replace />;
    }

    if (requireAdmin && user.role !== 'admin') {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default PrivateRoute;
