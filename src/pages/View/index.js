import React from 'react';
import ReactRoundedImage from 'react-rounded-image';
import {data} from "../../utils/data";
import {useSearchParams} from "react-router-dom";
import './styles.scss'
function Index() {
    const [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get('id');
    const admin = data.find(element => element.id==id);

    console.log(admin)
    return (
        <div style={{backgroundColor:'#fff'}} className="container-fluid">
            <div className="template-view my-2 py-3">

                <h2>Perfil de Administrador</h2>
                <div className="row p-1">
                    <div className="col">
                        <ReactRoundedImage image={admin.urlImage}
                                           imageWidth="65"
                                           imageHeight="65"
                                           roundedSize="2"/>
                        <h4>{admin.name}</h4>
                    </div>
                </div>
                <div className="row p-2 mt-2">
                    <div className="col">
                        <p className="view-title">NONMBRE(S)</p>
                        <h5>{admin.name}</h5>
                    </div>
                    <div className="col">
                        <p className="view-title">APELLIDOS</p>
                        <h5>{admin.name.split(" ", 2)[1]}</h5>
                    </div>
                    <div className="col">
                        <p>CORREO ELECTRONICO</p>
                        <h5>{admin.email}</h5>
                    </div>
                </div>

                <div className="row p-2 mt-3">
                    <div className="col">
                        <p className="view-title">ÁREA</p>
                        <h5>{admin.area}</h5>
                    </div>
                    <div className="col">
                        <p className="view-title">ESTATUS</p>
                        <h5>{admin.status ? 'Activo' : 'Inactivo'}</h5>
                    </div>
                    <div className="col"></div>
                </div>
            </div>

            <button style={{background:'#4FB9BB',color:'#fff'}} className="btn mt-3 mb-3">Editar administrador</button>
        </div>
    );
}

export default Index;