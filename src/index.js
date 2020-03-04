import React from "react"
import ReactDOM from "react-dom"
import {
  Route,
  Redirect,
  Switch,
  BrowserRouter as Router
} from "react-router-dom"
import Recipe from "Components/Recipe/container"
import Home from "Components/Home/container"
import { Provider } from "react-redux"
import createStore from "Redux/createStore"

const routing = (
  <Router>
    <Switch>
      <Route path="/recipe" exact component={Home} />
      <Route path="/recipe/:id" exact component={Recipe} />
      <Redirect exact from="/" to="/recipe" />
    </Switch>
  </Router>
)

ReactDOM.render(
  <Provider store={createStore()}>{routing}</Provider>,
  document.getElementById("root")
)
