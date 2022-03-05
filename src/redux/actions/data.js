import store from "../store";

import {ADD_ADMIN, DELETE_ADMIN, GET_DATA, UPDATE_ADMIN} from "./types";

export const getAdmins = () => {
    store.dispatch({type: GET_DATA, payload: ''});
}

export const addAdmins = (newAdmin) => {
    const aux = store.getState().data.admins;
    newAdmin.id = aux.length+1;
    aux.push(newAdmin);
    localStorage.setItem('stateAdmin',JSON.stringify(aux));
    store.dispatch({
        type: ADD_ADMIN, payload: aux
    })
}

export const updateAdmins = (newAdmin,id)=>{
    const aux = store.getState().data.admins;
    const acum = aux.find(admin => admin.id==id);
    const index = aux.indexOf(acum);
    aux[index] = newAdmin;
    store.dispatch({
        type: UPDATE_ADMIN,
        payload: aux
    })
}

export const deleteAdmin = (id)=>{
    const state = store.getState().data.admins;
    const acum = state.filter(admin => admin.id!=id);
    localStorage.setItem('stateAdmin',JSON.stringify(acum));
    store.dispatch({type:DELETE_ADMIN,payload:acum})
}