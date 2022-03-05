import React from 'react';
import {AiOutlineRight} from 'react-icons/ai'
import './styles.scss'
function Index(props) {
    return (
        <div className="d-flex align-content-center breadcrumb ">
            <p className="titleLight">Inicio</p>
            <div>
                <AiOutlineRight/>
            </div>
            <p className="titleLightBlue">Administradores</p>
        </div>
    );
}

export default Index;