import React from "react";
import {Link} from "react-router-dom"
export const NavBar = () =>
{
    return(
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-center">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/expense-tracker">Expense Tracker</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/courses">Course</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/add-course">Add Course</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/matches">Match Schedule</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/github-users">Github Users</Link>
                </li>
            </ul>
        </nav>

    );
}