import React from 'react';
import { Link } from 'react-router-dom';


export default function Home() {
    return (
        <div>
            Home Page
            <Link to='/window'>Window</Link>

        </div>
    )
}
