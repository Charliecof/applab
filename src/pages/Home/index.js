import React from 'react';
import AppTemplate from "../../templates/AppContainer";
import './styles.scss';
import ListElement from "../../components/ListElement";
import {data} from "../../utils/data";


function Index(props) {
    return (
        <AppTemplate>
            <div className="p-3">
                <ListElement data={data} headers={['Administradores', 'Area', 'Email', 'Estatus', 'Detalles']}/>
            </div>
        </AppTemplate>
    );
}

export default Index;