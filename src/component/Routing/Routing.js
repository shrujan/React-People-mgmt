import React from 'react';
import { Link } from 'react-router-dom';


const Routing = () => {
    return (
        <div>
                <ul>
                    <li>
                        <Link to='/' >People</Link>
                        <Link to='/Weather' >Weather</Link>
                    </li>
                </ul>
        </div>
    )
}

export default Routing