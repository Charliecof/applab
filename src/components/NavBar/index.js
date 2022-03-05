import React, {useEffect} from 'react';
import './styles.scss'
import {IoMdExit} from 'react-icons/io'
import UserInfoCard from "../UserInfoCard";
import SearchBar from "../SearchBar";

function Index(props) {

    return (
        <div className="navbar-custom">
            <SearchBar/>
            <div className="d-flex align-items-center">
                <UserInfoCard department="Recursos Humanos" name="Humberto Flores"
                              urlImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVLqfekg_kitC_QJ5kgBUTh2tt5EIcxEnQDQ&usqp=CAU"/>
                <button style={{marginLeft:'10px'}} className="d-none d-lg-block d-md-block d-xl-block btn-exit">
                    <IoMdExit size={20}/>
                </button>
            </div>
        </div>
    );
}

export default Index;