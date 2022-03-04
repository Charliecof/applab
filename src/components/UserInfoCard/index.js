import React from 'react';
import ReactRoundedImage from 'react-rounded-image';
import './styles.scss'
function Index({name,department,urlImage}) {
    return (
        <div className="d-flex profile-card align-items-center m-1">
            <div className="p-2">

                <ReactRoundedImage
                    image={urlImage}
                    imageWidth="35"
                    imageHeight="35"
                    roundedSize="2"
                />
            </div>
            <div>
                <p className="profile-text">{name}</p>
                <p className="profile-text">{department}</p>
            </div>
        </div>
    );
}

export default Index;