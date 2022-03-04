import {ADD_ADMIN, GET_DATA} from "../actions/types";
import {data} from "../../utils/data";

let initialState = localStorage.getItem('stateAdmin')
if (initialState)
    initialState = JSON.parse(localStorage.getItem('stateAdmin'));
else
    initialState = {admins: data,id: 5};
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
        default:
            return state;
    }
}