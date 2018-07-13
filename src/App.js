import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Titles from './components/Titles';
import Form from './components/Form';
import Order from './components/Order';

const App = (props) => (
  <div>
    <div className="wrapper">
      <div className="main container">            
        <div className="row">
          <div className="col-md-5 title-container">
            <Titles />
          </div>
          <div className="col-md-7 form-container">
            <Switch>
              <Route exact path='/' component={Form}/>
              <Route path='/orders' component={Order} />
            </Switch>                
          </div>
        </div>            
      </div>
    </div>
  </div>
);

export default App;