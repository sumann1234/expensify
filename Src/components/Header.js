import React from 'react';
import {NavLink} from 'react-router-dom';

const Header=() =>(
    <header>
    <h1>Expensifhhhjy</h1>
    <NavLink to="/" activeClassName='active-class' exact={true}> Home</NavLink>
    <NavLink to="/create" activeClassName='active-class'> Add </NavLink>
   
    <NavLink to="/help" activeClassName='active-class'> Help </NavLink>
    </header>
)

export default Header;