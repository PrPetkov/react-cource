import React, {Component} from 'react';
import './App.css';
import Login from "./login/login";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <main>
                    <Switch>
                        <Route exact path='/' component={Login}/>
                    </Switch>
                </main>
            </BrowserRouter>
        );
    }
}

export default App;
