import React from 'react';
import './styles.scss'
import {BiSearch} from 'react-icons/bi';
function Index(props) {
    return (
        <div className="search-bar">
            <input type="text"/>
            <BiSearch/>
        </div>
    );
}

export default Index;