import React from 'react';
import {BsCheckCircleFill} from 'react-icons/bs';
import {Link} from 'react-router-dom';
function Index(props) {
    return (
        <div style={{backgroundColor:'#fff'}} className="container-fluid">
            <h2 className="mb-4">Administradores de la consola</h2>
            <div className="row">
                <div className="col">
                <BsCheckCircleFill color="#6FCF97" size={50}/>

                    <h4>Cambios Guardados</h4>
                    <p>Tu administrador se ha guardado con éxito!</p>
                    <button onClick={()=>{window.location.replace('/')}} className="btn" style={{backgroundColor:'#4FB9BB',color:'#fff'}}>
                        Regresar a administradores
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Index;