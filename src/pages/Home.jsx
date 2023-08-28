import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <h2>Home</h2>
            <div>
                <ul className="nav nav-tabs">
                    <li>
                        <NavLink className="list-group-item" to="news">News</NavLink>
                    </li>
                    <li>
                        <NavLink className="list-group-item" to="/home/message">Message</NavLink>
                    </li>
                </ul>
                {/* Router Components will be shown here */}
                <Outlet />
            </div>
        </div>
    )
}
