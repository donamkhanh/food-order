import { MENU } from '../constants/menu';
import * as actionTypes from '../constants/actionTypes';

export const getMenuItems = () => {
    const today = new Date();  
    const weekday = {
        0: 'sun',
        1: 'mon',
        2: 'tue',
        3: 'wed',
        4: 'thu',
        5: 'fri',
        6: 'sat',        
    }

    const items = MENU[weekday[today.getDay()]];

    // merge daily menu
    MENU.all.primary_foods.forEach(food => {
        items.primary_foods.push(food);
    });

    return {
        type: actionTypes.LOAD_MENU,
        payload: items
    }
}

export const toggleSelectFood = (food) => {    
    return {
        type: actionTypes.TOGGLE_SELECT_FOOD,
        payload: {
            selectedFood: food
        }
    }
}

export const orderFood = (e, data) => {
    return {
        type: actionTypes.ORDER_FOOD,
        payload: []
    }        
}