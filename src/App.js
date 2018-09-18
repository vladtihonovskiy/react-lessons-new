import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from "react-router-dom";

import About from "./containers/About";
import HomePage from "./containers/Home";
import HomePageWithId from "./containers/HomePageWithId";


class App extends Component {
  render() {
    return (
		<BrowserRouter>
			<Switch>
				<Route exact path={"/"} component={HomePage} />
				<Route exact path={"/homepage"} component={HomePage} />
				<Route path={"/homepage/:id"} component={HomePageWithId} />
				<Route path={"/about"} component={About} />
			</Switch>
		</BrowserRouter>
    );
  }
}

export default App;
