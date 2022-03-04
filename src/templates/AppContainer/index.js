import React from 'react';
import NavBar from "../../components/NavBar";
import './styles.scss'
function Index({children}) {
    return (
        <div className="template-app">
            <NavBar/>
            {children}
        </div>
    );
}

export default Index;