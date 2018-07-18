import React from 'react';
import MenuItem from './MenuItem';

class Menu extends React.Component {
    render() {
        const { menuItems } = this.props;
        
        if (! menuItems) {
            return(
                <div>Chưa có dữ liệu</div>
            )
        }    
    
        return (
            <div className="row">
              {
                menuItems.primary_foods.map((item, index) => {
                    return (
                        <MenuItem primaryItem={ item } secondaryItem={ menuItems.secondary_foods } key={ index } {...this.props} />
                    );
                })
              }         
            </div>
          );
    }    
}

export default Menu;