import {NavLink} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <div>
            <ul>
                <li>
                    <NavLink className={({isActive})=> isActive ? 'active' : ''} to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive})=> isActive ? 'active' : ''} to='/about'>About</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive})=> isActive ? 'active' : ''} to='/users'>Users</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive})=> isActive ? 'active' : ''} to='/dashboard'>Dashboard</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive})=> isActive ? 'active' : ''} to='/dashboard/welcome'>Dashboard-Welcome</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
