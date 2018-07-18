import React from 'react';
import classNames from 'classnames';
import { API_URL } from '../constants/api';

class OrderRow extends React.Component {    
    state = {
        orders: this.props.orders
    }

    componentWillReceiveProps(nextProps) {
        this.setState(nextProps);
    }

    removeOrderItem(index) {
        if (window.confirm('Bạn có chắc chắn muốn xóa?')) {
            const { orders } = this.state;

            fetch(`${API_URL}?id=${orders[index].id}`, {
                method: 'DELETE',
                mode: 'cors'                
            })
            .then(res => window.location.reload())
            .catch(err => console.log(err));            
        }
    }

    paidProcessing(index) {
        const { orders } = this.state;

        orders[index].isPaid = !orders[index].isPaid;

        fetch(API_URL, {
            method: 'PUT',
            mode: 'cors',
            body: JSON.stringify(orders[index])
        })
        .then(res => console.log(res))
        .catch(err => console.log(err));

        this.setState({
            orders
        });
    }

    render() {
        return this.state.orders.map((order, index) => {
            return <tr key={`row-${index}`} className={classNames({'bg-success': order.isPaid})}>
                <td className="text-center">{index+1}</td>
                <td>{order.name}</td>
                <td>
                    <ul>
                        { order.foods.map((food, foodKey) => {
                            return <li key={`food-key-${foodKey}`}>{food.name}</li>
                        })}
                    </ul>
                </td>
                <td className="text-right">
                    <ul className="list-unstyled">
                        { order.foods.map((food, foodKey) => {
                            return <li key={`food-key-${foodKey}`}>{food.price.toLocaleString()}&#8363;</li>
                        })}
                    </ul>
                </td>
                <td className="text-center align-middle">
                    <div className="form-check">
                        <input className="form-check-input position-static" type="checkbox" checked={order.isPaid} onChange={ () => this.paidProcessing(index) } />
                    </div>
                </td>
                <td className="text-center align-middle">
                    <button className="btn btn-danger btn-sm" onClick={() => this.removeOrderItem(index)}>Xóa</button>
                </td>
            </tr>
        });
    }         
}

export default OrderRow;