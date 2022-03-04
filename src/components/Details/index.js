import React from 'react';
import {AiOutlineEdit, AiOutlineEye} from 'react-icons/ai';
import {BiTrash} from 'react-icons/bi'
import './styles.scss'
import {Link} from 'react-router-dom'

function Index({id}) {
    return (
        <div>
            <button className="btn-details edit"><AiOutlineEdit/></button>
            <button className="btn-details delete"><BiTrash/></button>
            <button value="2" className="btn-details view">
                <Link to={`/view?id=${id}`}>
                    <AiOutlineEye style={{color: '#323232'}}/>
                </Link>
            </button>
        </div>
    );
}

export default Index;