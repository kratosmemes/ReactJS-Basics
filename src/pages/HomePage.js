import {Link, Outlet} from 'react-router-dom';

function HomePage() {
    const userId = 10;
    return (
        <div>
            <Link to={`/users/'${userId}`}>Usuarios</Link>
        </div>
    )
}

export default HomePage
