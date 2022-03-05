import React from 'react';
import ReactRoundedImage from 'react-rounded-image';
import {useSearchParams} from "react-router-dom";
import {Link} from 'react-router-dom'
import './styles.scss'
import {useSelector} from "react-redux";

function Index() {
    const [searchParams, setSearchParams] = useSearchParams();
    const data = useSelector(state => state.data.admins);
    const id = searchParams.get('id');
    const admin = data.find(element => element.id == id);

    console.log(data, 'admin')
    return (
        <div style={{backgroundColor: '#fff'}} className="container-fluid">
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
                    <div className="col-lg-4 order-1 col-md-6">
                        <p className="view-title">NONMBRE(S)</p>
                        <h5>{admin.name}</h5>
                    </div>
                    <div className="col-md-6 col-lg-4 order-2" >
                        <p className="view-title">APELLIDOS</p>
                        <h5>{admin.name.split(" ", 2)[1]}</h5>
                    </div>
                    <div className="col-md-6 col-lg-4 order-5">
                        <p>CORREO ELECTRONICO</p>
                        <h5>{admin.email}</h5>
                    </div>
                </div>

                <div className="row p-2 mt-3">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <p className="view-title">ÁREA</p>
                        <h5>{admin.area}</h5>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <p className="view-title">ESTATUS</p>
                        <h5>{admin.status ? 'Activo' : 'Inactivo'}</h5>
                    </div>
                    <div className="col"></div>
                </div>
            </div>

            <Link to={`/edit?id=${id}`}>
                <button style={{background: '#4FB9BB', color: '#fff'}} className="btn mt-3 mb-3">
                    Editar administrador
                </button>
            </Link>
        </div>
    );
}

export default Index;