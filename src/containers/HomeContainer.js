import { connect } from 'react-redux'
import { getMenuItems, toggleSelectFood, orderFood } from '../actions/foodAction';
import Home from '../components/Home';

const mapStateToProps = (state) => {    
    return { 
        menuItems: state.food.menuItems,
        selectedItems: state.food.selectedItems,
        timestamp: state.food.timestamp
    };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMenuItems: () => {
      dispatch(getMenuItems());
    },
    toggleSelectFood: (selectedFood) => dispatch(toggleSelectFood(selectedFood)),
    orderFood: (data) => {        
        return dispatch(orderFood(data));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
