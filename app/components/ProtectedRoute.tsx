
import React from 'react';
import useAuth from '../(pages)/hooks/useAuth';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const { isAuthenticated, loading } = useAuth();

    if (loading) {
        return <div>Loading...</div>;
    }

    return isAuthenticated ? children : <div>You are not authorized to access this page.</div>;
};

export default ProtectedRoute;
