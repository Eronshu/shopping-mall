import React, {Component} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
class SideBar extends Component {
    search = () =>{
        const{searchWordElement:{value:searchWord}} = this
        console.log(searchWord)
        axios.get('',{
            params:{
                q:searchWord,
            }
        }).then(
            response=>{
                this.props.saveItems(response.data.items)
                console.log(response.data)
            }
        ).catch(
            err=>console.log(err)
        )
    }
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
                            ref={c=>this.searchWordElement = c}
                        />
                    </form>
                    {/*<form method="post">*/}
                        <button onClick={this.search} type="submit">Search</button>
                    {/*</form>*/}
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