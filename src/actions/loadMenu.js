import { MENU } from '../constants/Menu';

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

export const loadMenu = () => {
    return {
        type: 'LOAD_MENU',
        payload: items
    }
}