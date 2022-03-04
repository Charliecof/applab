import React from 'react';
import './styles.scss'

function Index({status}) {
    return (
        <>
            {status ?
                <p className={status ? 'status-activo' : 'status-inactivo'}>Activo</p>
                :
                <p className={status ? 'status-activo' : 'status-inactivo'}>Inactivo</p>
            }
        </>
    );
}

export default Index;