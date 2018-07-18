import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import OrderPage from './OrderPage';
import Titles from '../components/Titles';

const App = (props) => (
    <div>
        <div className="wrapper">
        <div className="main container">            
            <div className="row">
            <div className="col-xl-5 title-container d-none d-xl-flex">
                <Titles />
            </div>
            <div className="col-lg-12 col-xl-7 form-container">
                <Switch>
                    <Route exact path='/' component={ HomePage }/>
                    <Route path='/orders' component={ OrderPage } />
                </Switch>                
            </div>
            </div>            
        </div>
        </div>
    </div>
);
  
export default App;