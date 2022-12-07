import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import { getItems } from './api'
import './res/sidebar.css'
function SideBar(props) {
    const [type, setType] = useState('')
    const [keyword, setKeyword] = useState('')
    const search = () => {
        getItems({
            type,
            keyword
        }).then(res => {
            props.setData(res.data)
        })
    }
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
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                    />
                </form>
                {/*<form method="post">*/}
                <button onClick={search} type="submit">Search</button>
                {/*</form>*/}
            </div>

            <nav>
                <ul>
                    <li className={'sidebtn ' +('Brand' === type? 'active':'')} onClick={() => setType('Brand')}>
                        Brand
                    </li>
                    <li className={'sidebtn ' + ('Type' === type? 'active':'')} onClick={() => setType('Type')}>
                        Type
                    </li>
                </ul>
            </nav>
        </div>
    );

}

export default SideBar;