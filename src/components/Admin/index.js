import React from 'react';
import ReactRoundedImage from 'react-rounded-image';

function Index({urlImage,name}) {
    return (
        <div className="d-flex adminTuple ">
            <div >

                <ReactRoundedImage image={urlImage}
                                   imageWidth="35"
                                   imageHeight="35"
                                   roundedSize="2"/>
            </div>
            <p className="p-2">{name}</p>
        </div>
    );
}

export default Index;