import React from 'react';
import './styles.scss'
import Details from "../Details";
import Status from "../Status";
import Admin from "../Admin";
function Index({data, headers}) {

    return (
        <table>
            <thead>
            <tr>
                {headers.map(head => {
                    return <th scope="col">{head}</th>
                })}
            </tr>
            </thead>
            <tbody>
            {data.map(admin => {
                return (
                    <tr>
                        <td data-label="Administradores"><Admin name={admin.name} urlImage="https://upload.wikimedia.org/wikipedia/commons/5/5f/Alberto_conversi_profile_pic.jpg"/></td>
                        <td data-label="Area">{admin.area}</td>
                        <td data-label="Email">{admin.email}</td>
                        <td data-label="Estatus" >
                            <Status status={admin.status}/>
                        </td>
                        <td data-label="Detalles"><Details id={admin.id}/></td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    );
}

export default Index;