import React from 'react';
import classNames from 'classnames';

const MenuItem = (props) => {  
    const item = props.primaryItem;
    const includes = props.secondaryItem;
    let isSelected = false;
      
    if (props.selectedItems && props.selectedItems.has(item)) {
      isSelected = true;
    }

    return (
        <div className="col-6 col-md-4 mb-4">
            <div className="card" onClick={ () =>  props.toggleSelectFood(item) } >
                <img className="card-img-top" src={ require('../img/' + item.image) } alt={ item.name } />
                <div className="card-body">
                    <h5 className="card-title">
                    <span className="item-name">{ item.name }</span>
                    <span className="item-price float-right">{ item.price_abbr }</span>
                    </h5>                   
                </div>
                <div className="description">
                    { item.name !== 'Cơm thêm' && <div>
                    <h5>Món phụ</h5>
                    <ul>
                    {
                        includes.map((inc, i) => {
                            return(
                                <li key={i}>{ inc }</li>
                            )
                        }) 
                    }   
                    </ul>
                    </div> }
                </div>
                <div className={ classNames({'picked': true, 'active': isSelected}) }></div>
            </div>
         </div>
    );  
}

export default MenuItem;