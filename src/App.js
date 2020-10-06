import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import {withUAL} from 'ual-reactjs-renderer'

import MyLayout from "./components/layouts/MyLayout";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/">
                    <MyLayout/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default withUAL(App);
