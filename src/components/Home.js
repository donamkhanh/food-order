import React, { Component } from 'react';
import Form from '../components/Form';
import Menu from '../components/Menu';

class Home extends Component {
    componentWillMount() {
        this.props.getMenuItems();
    }

    render() {
        return (
            <div>
                <Form {...this.props} />
                <Menu {...this.props} />
                <p className="text-center"><em>Hình ảnh chỉ có tính chất minh họa ;-)</em></p>
            </div>
        );
    }
}

export default Home;