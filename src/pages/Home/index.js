import React from 'react';
import AppTemplate from "../../templates/AppContainer";
import './styles.scss';
import ListElement from "../../components/ListElement";
import {useSelector} from "react-redux";


function Index(props) {
    const dataTable = useSelector(state => state.data);
    console.log(dataTable)
    return (
        <AppTemplate>
            <div className="p-3">
                <ListElement data={dataTable}
                             headers={['Administradores', 'Area', 'Email', 'Estatus', 'Detalles']}/>
            </div>
        </AppTemplate>
    );
}

export default Index;