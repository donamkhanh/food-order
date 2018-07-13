import React from 'react';
import FoodItem from './FoodItem';

class FoodItems extends React.Component {
    render() {
        if (! this.props.items) {
            return(
                <div>Chưa có dữ liệu</div>
            )
        }    
    
        return (
            <div className="row">
              {
                this.props.items.primary_foods.map((item, index) => {
                    return (
                        // <FoodItem primaryItem={ item } secondaryItem={ props.items.secondary_foods } key={ index } isSelected={ isSelected } />
                        <FoodItem primaryItem={ item } secondaryItem={ this.props.items.secondary_foods } key={ index } />
                    );
                })
              }         
            </div>
          );
    }    
}

export default FoodItems;