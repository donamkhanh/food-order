import React from 'react';
import classNames from 'classnames';
import { connect } from "react-redux";
import { toggleSelectFood } from '../actions/toggleSelectFood';

const mapDispatchToProps = dispatch => {
	return {		
		toggleSelectFood: (selectedFood) => dispatch(toggleSelectFood(selectedFood))
	};
};

const mapStateToProps = state => {	
	return state.menus;
};

class FoodItem extends React.Component {
  render() {
    console.log(this.props)    
    const item = this.props.primaryItem;
    const includes = this.props.secondaryItem;
    let isSelected = false;
      

    if (this.props.selectedItems && this.props.selectedItems.has(item)) {
      isSelected = true;
    }

    return (
      <div className="col-6 col-md-4 mb-4">
        <div className="card" onClick={ () => this.props.toggleSelectFood(item) }>
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
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodItem);