import {ADD_ADMIN, DELETE_ADMIN, GET_DATA, UPDATE_ADMIN} from "../actions/types";
import {data} from "../../utils/data";

let initialState = localStorage.getItem('stateAdmin');
if (initialState)
    initialState={admins: JSON.parse(localStorage.getItem('stateAdmin'))};
else
    initialState = {admins: data};
export default function dataReducer(state = initialState, action){
    switch (action.type) {
        case GET_DATA:
            return{
                state
            }
        case ADD_ADMIN:
            return {
                ...state,
                admins: action.payload,
            }
        case UPDATE_ADMIN:
            return {
                ...state,
                admins: action.payload,
            }
        case DELETE_ADMIN:
            return {
                ...state,
                admins: action.payload,
            }
        default:
            return state;
    }
}