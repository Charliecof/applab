import React from 'react';
import {AiOutlineEdit, AiOutlineEye} from 'react-icons/ai';
import {BiTrash} from 'react-icons/bi'
import './styles.scss'
import {Link} from 'react-router-dom'

function Index({id}) {
    return (
        <div>
            <button className="btn-details edit">
                <Link to={`/edit?id=${id}`}>
                    <AiOutlineEdit style={{color:'#4FB9BB'}}/>
                </Link>
            </button>
            <button className="btn-details delete">
                <Link to={`/edit?id=${id}`}>
                    <BiTrash style={{color:'#EB5757'}}/>
                </Link>
            </button>
            <button value="2" className="btn-details view">
                <Link to={`/view?id=${id}`}>
                    <AiOutlineEye style={{color: '#323232'}}/>
                </Link>
            </button>
        </div>
    );
}

export default Index;