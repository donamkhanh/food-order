import { LOAD_MENU } from '../constants/actionTypes';

const initialState = {
    menus: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_MENU:
            return {
                ...state,
                menus: action.payload
            };

        default:
            return state;
    }
}