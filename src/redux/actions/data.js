import store from "../store";

import {ADD_ADMIN, GET_DATA} from "./types";

export const getAdmins = () => {
    store.dispatch({type: GET_DATA, payload: ''});
}

export const addAdmins = (newAdmin) => {
    const aux = store.getState().data.admins;
    newAdmin.id = aux.length+1;
    aux.push(newAdmin);
    localStorage.setItem('stateAdmin',JSON.stringify())
    store.dispatch({
        type: ADD_ADMIN, payload: aux
    })
}