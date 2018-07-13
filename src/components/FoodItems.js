import React from 'react';
import FoodItem from './FoodItem';

const FoodItems = props => {   
    console.log(props); 
    if (! props.items) {
        return(
            <div>Chưa có dữ liệu</div>
        )
    }    

    return (
        <div className="row">
          {
            props.items.primary_foods.map((item, index) => {
                let isSelected = false;
                const selectedItems = props.selectedItems;

                if (selectedItems.has(item)) {
                    isSelected = true;
                }

                return (
                    <FoodItem primaryItem={ item } secondaryItem={ props.items.secondary_foods } key={ index } clickHandler={ props.clickHandler } isSelected={ isSelected } />
                );
            })
          }         
        </div>
      );
}

export default FoodItems;