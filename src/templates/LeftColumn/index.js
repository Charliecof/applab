import React from 'react';
import './styles.scss'
function Index({children}) {
    return (
        <div className="leftColumn">
            {children}
        </div>
    );
}

export default Index;