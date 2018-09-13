import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from "react-router-dom";

import About from "./containers/About";
import Home from "./containers/Home";
import HomeShowId from "./containers/HomeShowId";


class App extends Component {
  render() {
    return (
		<BrowserRouter>
			<Switch>
				<Route exact path={"/"} component={Home} />
				<Route exact path={"/home"} component={Home} />
				<Route path={"/home/:id"} component={HomeShowId} />
				<Route path={"/about"} component={About} />
			</Switch>
		</BrowserRouter>
    );
  }
}

export default App;
