import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Navigation } from 'react-router-dom';
 
import Booking from './booking';
import Landing from './landing';
import StoreList from './storelist';
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
            <Switch>
             <Route exact path="/" component={Landing}/>
             <Route exact path="/stores" component={StoreList}/>
             <Route exact path="/storeinfo" component={Booking}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}

export default App;