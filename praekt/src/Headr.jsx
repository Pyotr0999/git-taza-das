import React from "react";
import { Link } from 'react-router-dom'
function Header() {
    return(
        <header>
            <Link to='/'>Home</Link>
            <Link to='/shop'>Shop</Link>
        </header>
    )
}
export default Header