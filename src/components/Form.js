import React from 'react';
import { Redirect } from 'react-router-dom';
import { API_URL } from '../constants/api';

class Form extends React.Component {
    state = {		
		errorMessage: null,
		successMessage: null,
		redirect: false
    }
    
    // TODO: should move this function to redux and use redux-form
    handleSubmit(e) {
        e.preventDefault();
                
        if (this.props.selectedItems.size === 0 || e.target.name.value === '') {
			this.setState({				
				errorMessage: 'Vui lòng chọn món và nhập Họ tên trước khi bấm Đặt món',
				successMessage: null
			});

			return false;
		}
        
        const postData = [];
        for (let i of this.props.selectedItems.values()) {
            postData.push(i);
        }
                
        return fetch(API_URL, {
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
                successMessage: 'Đặt món thành công!'                
            });

            setTimeout(() => {
                this.setState({
                    redirect: true
                });
            }, 2000);
        })
        .catch(error => console.error('Error:', error));
    }

    renderRedirect = () => {
		if (this.state.redirect) {			
			return <Redirect to='/orders' />			
		}
	}
    
    render() {
        return (                
            <form onSubmit={ (e) => { this.handleSubmit(e) } }>
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
            </form>
        );
    }    
}

export default Form;