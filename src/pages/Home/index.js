import React, {useEffect, useState} from 'react';
import AppTemplate from "../../templates/AppContainer";
import './styles.scss';
import ListElement from "../../components/ListElement";
import {useSelector} from "react-redux";


function Index(props) {
    const dataTable = useSelector(state => state.data.admins);
    const [query, setQuery] = useState('');
    const [filteredTable, setFiltered] = useState([]);
    console.log(dataTable, 'filtered');
    useEffect(() => {
        const aux = dataTable.filter(tuple => {
            if (query == '')
                return tuple;
            if (tuple.name.toLowerCase().includes(query.toLowerCase()))
                return tuple
            if (tuple.lastname.toLowerCase().includes(query.toLowerCase()))
                return tuple
            if (tuple.email.toLowerCase().includes(query.toLowerCase()))
                return tuple
        });
        console.log(aux, 'query')
        setFiltered([...aux])
    }, [query,dataTable])
    const onChange = (e) => {
        setQuery(e.target.value);
    }
    return (
        <AppTemplate>
            <h4 style={{marginLeft: '15px'}}>Administracion de la consola</h4>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-5   ">
                        <div className="d-flex">
                            <input className="form-control me-2" onChange={onChange} type="search" placeholder="Buscar"
                                   aria-label="Search"/>
                            <button className="btn" style={{backgroundColor: '#E8EAF0', color: '#323232'}}>Search
                            </button>
                        </div>
                    </div>

                    <div className="col-sm-6 text-sm-end text-start" style={{ marginRight: '15px'}}>
                        <button onClick={()=>{window.location.replace('/new')}} className="btn mt-3" style={{backgroundColor: "#4FB9BB", color: "#fff"}}>Agregar admin
                        </button>
                    </div>
                </div>
            </div>

            <div className="p-3">
                {filteredTable.length > 0 ?
                    <ListElement data={filteredTable}
                                 headers={['Administradores', 'Area', 'Email', 'Estatus', 'Detalles']}/>
                    :
                    <ListElement data={dataTable}
                                 headers={['Administradores', 'Area', 'Email', 'Estatus', 'Detalles']}/>
                }

            </div>
        </AppTemplate>
    );
}

export default Index;