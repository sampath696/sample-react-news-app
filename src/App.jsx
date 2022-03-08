import React from 'react';
import News from './components/News';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavbarContainer from './components/Navbar';
import Business from './components/Business';
import Health from './components/Health';
import Science from './components/Science';
import Sports from './components/Sports';
import Entertainment from './components/Entertainment';
import Technology from './components/Technology';

const App = () => {
    return (
        <div>
              <BrowserRouter>
                    <NavbarContainer />
                    <Switch>
                        <Route exact path="/" component={News} />
                        <Route path="/All" component={News} />
                        <Route path="/Business" component={Business} />
                        <Route path="/Entertainment" component={Entertainment} />
                        <Route path="/Health" component={Health} />
                        <Route path="/Science" component={Science} />
                        <Route path="/Sports" component={Sports} />
                        <Route path="/Technology" component={Technology} />
                    </Switch>
                </BrowserRouter>
        </div>
    )
}

export default App
