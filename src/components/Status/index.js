import React from 'react';
import './styles.scss'

function Index({status}) {
    return (
        <>
            {status ?
                <p className={status ? 'status-activo' : 'status-inactivo'}>ACTIVO</p>
                :
                <p className={status ? 'status-activo' : 'status-inactivo'}>INACTIVO</p>
            }
        </>
    );
}

export default Index;