import React from 'react'
// import './res/Header.css'
import './res/Main.css'
import Item from "./Item";

export default class Main extends React.Component {

    render() {
        return (
            <div className='container'>
                {
                    this.props.items?.map((itemObj) => {
                        return (
                            <Item itemName={itemObj.id} itemImg={itemObj.avatar_url} itemContent={itemObj.login}
                                  itemPrice={'$560'}/>
                        )
                    })
                }

            </div>
        )
    }
}