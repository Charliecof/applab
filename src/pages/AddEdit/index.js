import React from 'react';
import {Formik, Form, Field, ErrorMessage} from "formik";
import {validationSchema} from '../../utils/formSchema';
import './styles.scss'
import {addAdmins} from "../../redux/actions/data";
import {useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {updateAdmins} from "../../redux/actions/data";

function Index({mode}) {
    const datos = useSelector(state => state.data.admins);
    const [searchParams, setSearchParams] = useSearchParams();
    let id;
    if (mode === 'edit')
        id = searchParams.get('id');
    let initialValues;
    if (mode === 'edit')
        initialValues = datos.find(dato => dato.id == id);
    else {
        initialValues = {
            name: '',
            urlImage: '',
            lastname: '',
            email: '',
            area: '',
            status: '',
        }
    }

    const editFunc = (values) => {
        const updatedAdmin = {...values}
        updateAdmins(updatedAdmin, id);
        localStorage.setItem('stateAdmin', JSON.stringify(datos));
        window.location.replace('/confirmation');
    }
    const addFunc = (values) => {
        const newAdmin = {
            ...values,
            details: 'Detallito'
        }
        newAdmin.name = `${newAdmin.name} ${newAdmin.lastname}`;
        addAdmins(newAdmin);
        localStorage.setItem('stateAdmin', JSON.stringify(datos));
        ;
        window.location.replace('/');
    }
    return (
        <div style={{backgroundColor: '#fff',height:'100%|'}} className="container-fluid pb-5">
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-10">
                    <h2>{mode === 'add' ? 'Agrear Administrador' : 'Editar Administrador'}</h2>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={mode === 'edit' ? editFunc : addFunc}
                        validationSchema={validationSchema}
                    >
                        <Form>
                            <div className="form-group p-2 mt-3">
                                <label className="form-label">Image URL: </label>
                                <Field className="form-control" type="text" name="urlImage"
                                       placeholder="URL de imagen"/>
                                <ErrorMessage name="urlImage">
                                    {(errorMessage) => <p className="error-msg">{errorMessage}</p>}
                                </ErrorMessage>
                            </div>
                            <div className="form-group p-2 mt-3">
                                <label className="form-label">Nombre: </label>
                                <Field className="form-control" type="text" name="name"
                                       placeholder="Nombre"/>
                                <ErrorMessage name="name">
                                    {(errorMessage) => <p className="error-msg">{errorMessage}</p>}
                                </ErrorMessage>
                            </div>
                            <div className="form-group p-2 mt-3">
                                <label className="form-label">Apellido: </label>
                                <Field className="form-control" type="text" name="lastname"
                                       placeholder="Apellido"/>
                                <ErrorMessage name="lastname">
                                    {(errorMessage) => <p className="error-msg">{errorMessage}</p>}
                                </ErrorMessage>
                            </div>
                            <div className="form-group p-2 mt-3">
                                <label className="form-label">Correo Electronico: </label>
                                <Field className="form-control" id="email" type="text" name="email"
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
                                <Field className="form-select" as="select" name="status"
                                       placeholder="Estatus">
                                    <option value={null}>-----</option>
                                    <option value={true}>Activo</option>
                                    <option value={false}>Inactivo</option>
                                </Field>
                                <ErrorMessage name="status">
                                    {(errorMessage) => <p className="error-msg">{errorMessage}</p>}
                                </ErrorMessage>
                            </div>


                            <div className="d-flex justify-content-between">

                                <button className="btn" type="button" onClick={() => {
                                    window.location.replace('/')
                                }}>Cancelar
                                </button>
                                <button className="btn" style={{backgroundColor: '#4FB9BB', color: '#fff'}}
                                        type="submit">{mode === 'edit' ? 'Editar' : 'Agregar administrador'}</button>
                            </div>


                        </Form>

                    </Formik>
                </div>
            </div>
        </div>
    );
}

export default Index;