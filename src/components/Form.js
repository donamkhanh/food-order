import React from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from "react-redux";
import { loadMenu } from '../actions/loadMenu';
import FoodItems from './FoodItems';

const mapDispatchToProps = dispatch => {
	return {
		loadMenu: () => dispatch(loadMenu())
	};
};

const mapStateToProps = state => {
	return state.menus;
};

// const API_URL = 'http://172.16.10.125:8080/food-api.php';
const API_URL = 'http://localhost/food-api.php';

class Form extends React.Component {
	state = {
		selectedItems: new Set(),
		errorMessage: null,
		successMessage: null,
		redirect: false
	}

	componentDidMount() {
		this.props.loadMenu();
	}

	clickHandler = (item) => {				
		let items = this.state.selectedItems;
		
		if (items.has(item)) {
			items.delete(item);
		} else {
			items.add(item);
		}

		this.setState({selectedItems: items});
	}

	sendOrder = (e) => {
		e.preventDefault();
		const postData = []
		for (let i of this.state.selectedItems.values()) {
			postData.push(i);
		}
		
		if (this.state.selectedItems.size === 0 || e.target.name.value === '') {
			this.setState({
				// selectedItems: new Set(),
				errorMessage: 'Vui lòng chọn món và nhập Họ tên trước khi bấm Đặt món',
				successMessage: null
			});

			return false;
		}
		
		fetch(API_URL, {
			method: 'POST',
			mode: 'cors',
			body: JSON.stringify({
				name: e.target.name.value,
				selectedItems: postData
			})
		})		
		.then(response => {
			this.setState({
				selectedItems: new Set(),
				errorMessage: null,
				successMessage: 'Đặt món thành công!',
				redirect: true
			});			
		})
		.catch(error => console.error('Error:', error));	
	}

	renderRedirect = () => {
		if (this.state.redirect) {			
			return <Redirect to='/orders' />			
		}
	}

	render() {		
		console.log(this.props);		
		return(
			<form onSubmit={ this.sendOrder }>
				{this.renderRedirect()}
				{
					this.state.errorMessage && <div className="alert alert-danger rounded-0" role="alert">
						{ this.state.errorMessage }
					</div>					
				}
				{
					this.state.successMessage && <div className="alert alert-success rounded-0" role="alert">
						{ this.state.successMessage }
					</div>					
				}
				<input type="text" name="name" placeholder="Nhập họ tên..."/>
				<button>Đặt món</button>

				<FoodItems items={ this.props.menus } clickHandler={ this.clickHandler } selectedItems={ this.state.selectedItems } />

				<p className="text-center"><em>Hình ảnh chỉ có tính chất minh họa ;-)</em></p>				
			</form>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);