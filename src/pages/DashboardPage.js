import React from 'react'
import {useNavigate ,Route, Routes, Outlet} from 'react-router-dom';

function DashboardPage() {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
    }
    return (
        <div>
            <button onClick={handleClick}>Logout</button>
            <Outlet />
        </div>
    )
}

export default DashboardPage
