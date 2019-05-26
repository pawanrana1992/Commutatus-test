import React from 'react';
import './App.css';
import IndexPage from "./App/pages/IndexPage/IndexPage";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

class App extends React.PureComponent {
    render() {
        return(
            <Router>
                <Switch>
                    <Route path={'/'} component={IndexPage}/>
                    <Route  render={()=><h3 style={{textAlign:'center'}}>OOP 404 Error</h3>}/>
                </Switch>
            </Router>

        )
    }
}


export default App;
