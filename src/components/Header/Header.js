import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';


const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="header">
            
            <nav>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/review">Order Review</NavLink>
                {user.email && <NavLink to="/orders">Orders</NavLink>}
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/register">Register</NavLink>
                {user.email && <span style={{ color: 'white' }}> {user.displayName} </span>}
               
                {
                    user.email&& user.displayName ?
                        <button className='btn btn-warning' onClick={logOut}>log out</button>
                        :
                        <NavLink to="/login">Login</NavLink>}
            </nav>
        </div>
    );
};

export default Header;