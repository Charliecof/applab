import React from 'react';
import {AiOutlineEdit, AiOutlineEye} from 'react-icons/ai';
import {BiTrash} from 'react-icons/bi'
import './styles.scss'
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {deleteAdmin} from "../../redux/actions/data";
import {useSelector} from "react-redux";

function Index({id}) {
    const MySwal = withReactContent(Swal);
    const admins = useSelector(state => state.data.admins);
    const thisAdmin = admins.find(admin=>admin.id==id);
    const onDelete = () => {
        console.log('Delete');
        Swal.fire({
            title: 'Estas seguro?',
            text: "No podras recuperar la informacion una vez completado",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteAdmin(id)
                Swal.fire(
                    'Eliminado!',
                    `El Admin ${thisAdmin.name} ${thisAdmin.lastname} ha sido eliminado`,
                    'success'
                )
            }
        })

    }
    return (
        <div>
            <button className="btn-details edit">
                <Link to={`/edit?id=${id}`}>
                    <AiOutlineEdit style={{color: '#4FB9BB'}}/>
                </Link>
            </button>
            <button onClick={onDelete} className="btn-details delete">
                <BiTrash style={{color: '#EB5757'}}/>
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