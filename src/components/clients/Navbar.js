import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-success">
            <span className="navbar-brand">Clients</span>            
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Acceuil</Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/Ajouter">Ajouter</Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/Apropos">A-propos</Link>
                </li>
            </ul>
        </nav>
    )
}
