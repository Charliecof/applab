import React from 'react';
import './styles.scss'
import Details from "../Details";
import Status from "../Status";
import Admin from "../Admin";
const Index = ({data, headers})=> {
    console.log(data)
    const tableBody = data.admins.map(admin => {
        return (
            <tr>
                <td data-label="Administradores"><Admin name={admin.name} urlImage={admin.urlImage}/></td>
                <td data-label="Area">{admin.area}</td>
                <td data-label="Email">{admin.email}</td>
                <td data-label="Estatus" >
                    <Status status={admin.status}/>
                </td>
                <td data-label="Detalles"><Details id={admin.id}/></td>
            </tr>
        )
    });
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
            {data!=null || data ? tableBody : null}
            </tbody>
        </table>
    );
}

export default Index;

Index.defaultProps={
    data:[]
}