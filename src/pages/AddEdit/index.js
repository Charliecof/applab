import React from 'react';
import {Formik, Form, Field, ErrorMessage} from "formik";
import {validationSchema} from '../../utils/formSchema';
import './styles.scss'
import {addAdmins} from "../../redux/actions/data";
import {useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

function Index({mode}) {
    const datos = useSelector(state => state.data.admins);
    const [searchParams, setSearchParams] = useSearchParams();
    let id;
    if(mode==='edit')
        id= searchParams.get('id');
    let initialValues;
    if(mode==='edit')
        initialValues = datos.find(dato=>dato.id==id);
    else{
        initialValues = {
            name: '',
            urlImage: '',
            lastname: '',
            email: '',
            area: '',
            status: '',
        }
    }

    return (
        <div style={{backgroundColor: '#fff'}} className="container-fluid">
            <h2>{mode==='add' ? 'Agrear Administrador' : 'Editar Administrador'}</h2>
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                    const newAdmin = {
                        ...values,
                        details: 'Detallito'
                    }
                    newAdmin.name = `${newAdmin.name} ${newAdmin.lastname}`;
                    addAdmins(newAdmin);
                    console.log(newAdmin);
                    localStorage.setItem('stateAdmin',JSON.stringify(datos))
                }}
                validationSchema={validationSchema}
            >
                <Form>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-4">
                                <div className="form-group p-2 mt-3">
                                    <label className="form-label">Image URL: </label>
                                    <Field className="form-control" value={mode==='edit' ? initialValues.urlImage : ''} type="text" name="urlImage"
                                           placeholder="URL de imagen"/>
                                    <ErrorMessage name="urlImage">
                                        {(errorMessage) => <p className="error-msg">{errorMessage}</p>}
                                    </ErrorMessage>
                                </div>
                                <div className="form-group p-2 mt-3">
                                    <label className="form-label">Nombre: </label>
                                    <Field className="form-control" value={mode==='edit' ? initialValues.name : ''} type="text" name="name" placeholder="Nombre"/>
                                    <ErrorMessage name="name">
                                        {(errorMessage) => <p className="error-msg">{errorMessage}</p>}
                                    </ErrorMessage>
                                </div>
                                <div className="form-group p-2 mt-3">
                                    <label className="form-label">Apellido: </label>
                                    <Field className="form-control" type="text" value={mode==='edit' ? initialValues.lastname : ''} name="lastname" placeholder="Apellido"/>
                                    <ErrorMessage name="lastname">
                                        {(errorMessage) => <p className="error-msg">{errorMessage}</p>}
                                    </ErrorMessage>
                                </div>
                                <div className="form-group p-2 mt-3">
                                    <label className="form-label">Correo Electronico: </label>
                                    <Field className="form-control" value={mode==='edit' ? initialValues.email : ''} id="email" type="text" name="email"
                                           placeholder="Correo Electronico"/>
                                    <ErrorMessage name="email">
                                        {(errorMessage) => <p className="error-msg">{errorMessage}</p>}
                                    </ErrorMessage>
                                </div>
                                <div className="form-group p-2 mt-3">
                                    <label className="form-label">Area: </label>
                                    <Field className="form-select" as="select" name="area" placeholder="Nombre">
                                        <option value={null}>-----</option>
                                        <option value="Recursos Humanos">Recursos Humanos</option>
                                        <option value="Mantenimiento">Mantenimiento</option>
                                        <option value="Operaciones">Operaciones</option>
                                    </Field>
                                    <ErrorMessage name="area">
                                        {(errorMessage) => <p className="error-msg">{errorMessage}</p>}
                                    </ErrorMessage>
                                </div>
                                <div className="form-group p-2 mt-3">
                                    <label className="form-label">Estatus: </label>
                                    <Field className="form-select" as="select" name="status" placeholder="Estatus">
                                        <option value={null}>-----</option>
                                        <option value={true}>Activo</option>
                                        <option value={false}>Inactivo</option>
                                    </Field>
                                    <ErrorMessage name="status">
                                        {(errorMessage) => <p className="error-msg">{errorMessage}</p>}
                                    </ErrorMessage>
                                </div>
                            </div>

                            <div>

                                <button className="btn">Cancelar</button>
                                <button className="btn" type="submit">Agregar administrador</button>
                            </div>
                        </div>
                    </div>
                </Form>

            </Formik>
        </div>
    );
}

export default Index;