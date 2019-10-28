import React from 'react';
import { Link } from 'react-router-dom'

const Header = ({white}) => {
    return (
        <div id="header--wrapper" style={{backgroundColor: white ? 'white' : 'black'}}>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/second">Second</Link>
            </nav>
        </div>
    )
}
export default Header;