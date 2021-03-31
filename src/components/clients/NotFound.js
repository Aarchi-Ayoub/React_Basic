import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div>
            <center>
                <h2>Page not found</h2>
            </center>
            <Link to="/">
                    Revenir à la page d'acceuil
            </Link>
        </div>
    )
}
