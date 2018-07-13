import React from 'react';
import { Link } from 'react-router-dom';
import OrderRow from './OrderRow';

// const API_URL = 'http://172.16.10.125:8080/food-api.php';
const API_URL = 'http://localhost/food-api.php';

class Order extends React.Component {
	state = {
		error: null,
		isLoaded: false,
		orders: [],
		subTotal: 0,
		invoices: [],
		discount: 0
	}		

	componentDidMount() {
		fetch(API_URL).then(res => res.json()).then(res => this.prepareDataOrderSummary(res)).catch(err => console.log(err));				
	}
		
	prepareDataOrderSummary(orders) {
		const invoices = [];
		let subTotal = 0;
		let totalQuantity = 0;
		const tmp = {};

		orders.items.forEach((order, index) => {
			order.foods.forEach(food => {
				const foodName = food.name;		

				if (! tmp.hasOwnProperty(foodName)) {
					tmp[foodName] = {
						price: food.price,
						quantity: 1
					}					
				} else {
					tmp[foodName].quantity++;
				}			
			});
		});

		const values = Object.values(tmp);

		Object.keys(tmp).forEach((value, key) => {
			const item = {
				name: value,
				quantity: values[key].quantity,
				price: values[key].price,
				total: values[key].price * values[key].quantity
			}

			if (item.name !== 'Cơm thêm') {
				totalQuantity += item.quantity;
			}

			subTotal += item.total;			
			invoices.push(item);			
		});

		// Total order greater than 10 we will have discount 5000 for each one
		let discount = 0;
		if (totalQuantity >= 10) {
			discount = totalQuantity * 5000;
			subTotal -= discount;
		}
			
		this.setState({
			isLoaded: true,
			orders: orders.items,
			invoices,
			subTotal,
			discount,
			orderDate: orders.orderDate
		});
	}
	
	renderInvoice() {		
		return this.state.invoices.map((invoice, index) => {
					return <tr key={`invoice-${index}`}>
						<td className="text-center">{index+1}</td>
						<td>{invoice.name}</td>
						<td className="text-right">{invoice.price.toLocaleString()}&#8363;</td>
						<td className="text-center">{invoice.quantity}</td>
						<td className="text-right">{invoice.total.toLocaleString()}&#8363;</td>
					</tr>
				});		
	}

	render() {		
		return(
			<div>
				<h3>Danh sách đặt cơm ngày {this.state.orderDate}</h3>
				<div className="table-responsive">
					<table className="table table-bordered table-hover table-sm table-striped">
						<thead>
							<tr>
								<th className="text-center">STT</th>
								<th>Họ tên</th>
								<th>Món đã chọn</th>
								<th className="text-right">Giá</th>
								<th className="text-center">Đã trả tiền?</th>
								<th className="text-center">Hành động</th>
							</tr>
						</thead>
						<tbody>			
							{
								this.state.orders.length === 0 && <tr><td colSpan="6">Chưa có dữ liệu</td></tr>
							}
							<OrderRow orders={this.state.orders} />
						</tbody>		
					</table>					
				</div>
				<h3>Báo bếp</h3>
				<table className="table table-bordered table-hover table-sm table-striped">
					<thead>
						<tr>
							<th className="text-center">STT</th>
							<th>Tên món</th>
							<th className="text-right">Giá</th>
							<th className="text-center">Số lượng</th>							
							<th className="text-right">Tổng</th>							
						</tr>
					</thead>
					<tbody>
						{ this.renderInvoice() }	
						{ this.state.discount > 0 && <tr>
							<td colSpan="4" className="text-right font-weight-bold">Giảm giá</td>
							<td className="text-right font-weight-bold">{this.state.discount.toLocaleString()}&#8363;</td>
						</tr>
						}
						<tr>
							<td colSpan="4" className="text-right font-weight-bold">Tổng tiền</td>
							<td className="text-right font-weight-bold">{this.state.subTotal.toLocaleString()}&#8363;</td>
						</tr>
					</tbody>
				</table>
				<div className="text-center">
					<Link to="/" className="btn btn-primary btn-sm">Về Trang Chủ</Link>&nbsp;<button className="btn btn-danger btn-sm" onClick={() => alert('Chức năng này sẽ gửi push notification đến các đồng chí chưa trả tiền!')}>Đòi tiền</button>
					<button className="btn btn-success btn-sm" onClick={() => alert('Chức năng này sẽ gửi thông tin đặt món ăn qua SMS tới nhà hàng!')}>Gửi SMS tới nhà hàng</button>
				</div>
			</div>
		);
	}
}

export default Order;