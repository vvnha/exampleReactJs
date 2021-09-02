import {TOGGLLE_AUTH} from './type'

export const authReducer = (state, action) =>{
    const {type} = action
    switch (type){
        case TOGGLLE_AUTH:
            return !state;
        default:
            return state;
    }
}