import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import {
    getAllItemBrands,
    getAllItems,
    getAllItemTypes,
    getItems,
    searchItemByBrand,
    searchItemByKeyword,
    searchItemByType
} from './api'
import './res/sidebar.css'
function toggleMenu(e) {
    const ul = e.target.querySelector('ul');
    ul.classList.toggle('hidden');
}
function stopPropagation(e) {
    e.stopPropagation();
}
function SideBar(props) {
    const [keyword, setKeyword] = useState('')
    const [brands, setBrands] = useState([]);
    const [types, setTypes] = useState([]);

    useEffect(() => {
        getAllItemBrands().then(res => {
            setBrands(res.data.data)
        })
        getAllItemTypes().then(res => {
            setTypes(res.data.data)
        })

    }, [])
    const search = () => {
        console.log(keyword)
        searchItemByKeyword(
            keyword
        ).then(res => {
            console.log(res)
            props.setList(res.data.data)
        })
    }
    const brand = (brand) => {
        console.log(brand)
        searchItemByBrand(
            brand
        ).then(res => {
            console.log(res)
            props.setList(res.data.data)
        })
    }
    const type = (type) => {
        console.log(type)
        searchItemByType(
            type
        ).then(res => {
            console.log(res)
            props.setList(res.data.data)
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
                    <li className={'sidebtn ' + ('Brand' === type ? 'active' : '')} onClick={(e) => toggleMenu(e)}>
                        Brand
                        <ul className="hidden" onClick={(e) => stopPropagation(e)}>
                            {brands.map((brandsObj, index) => (
                                    <li key={brandsObj.id} onClick={(e)=>brand(brandsObj)}>{brandsObj}</li>
                            ))}
                        </ul>
                    </li>
                    <li className={'sidebtn ' + ('Type' === type ? 'active' : '')} onClick={(e) => toggleMenu(e)}>
                        Type
                        <ul className="hidden" onClick={(e) => stopPropagation(e)}>
                            {types.map((typesObj, index) => (
                                <li key={typesObj.id} onClick={(e)=>type(typesObj)}>{typesObj}</li>
                            ))}
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    );

}

export default SideBar;