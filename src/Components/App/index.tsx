import React, { ReactElement } from "react"
import { BrowserRouter,Route, Switch } from "react-router-dom"
import Home from '../Home/index';
import GlobalStyles from "Components/GlobalStyles";


const App = (): ReactElement => (
    <>
    <GlobalStyles />
        <BrowserRouter>
    <Switch>
        <Route path="/">
            <Home />
        </Route>
    </Switch>
    </BrowserRouter>
    </>
)

export default App