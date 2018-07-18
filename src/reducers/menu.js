import * as actionTypes from '../constants/actionTypes';

const initialState = {
    menuItems: null,
    selectedItems: new Set()
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_MENU:
            return {
                ...state,
                menuItems: action.payload
            };

        case actionTypes.TOGGLE_SELECT_FOOD:
            let items = state.selectedItems;            
		
        	if (items.has(action.payload.selectedFood)) {
        		items.delete(action.payload.selectedFood);
        	} else {
        		items.add(action.payload.selectedFood);
            }            
            
            return {
                ...state,
                selectedItems: items,
                timestamp: new Date().getMilliseconds()
            };

        default:
            return state;
    }
}