import React, {Component} from 'react';
import {Link} from "react-router-dom";

class SideBar extends Component {
    render() {
        return (
            <div id="sidebar">
                <h1>Team G Shopping Mall</h1>
                <div>
                    <form id="search-form" role="search">
                        <input
                            id="q"
                            aria-label="Search contacts"
                            placeholder="Search"
                            type="search"
                            name="q"
                        />
                    </form>
                    <form method="post">
                        <button type="submit">Search</button>
                    </form>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to={`brand`}>Brand</Link>
                        </li>
                        <li>
                            <Link to={`type`}>Type</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default SideBar;