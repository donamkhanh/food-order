import * as actionTypes from '../constants/actionTypes';

export const toggleSelectFood = (food) => {
    return {
        type: actionTypes.TOGGLE_SELECT_FOOD,
        payload: {
            selectedFood: food
        }
    }
}