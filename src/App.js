import React, { Component } from 'react';

import NavBar from "./components/NavBar/NavBar";

import classes from './App.less';

import { LoaderContainer, loader } from "./components/Loader/Loader";

import { apiUrl } from "./constants/config";

class App extends Component {

    render() {
        return (
            <div className={classes.app}>
				<LoaderContainer />
                <NavBar />
                <div className={classes.appContainer}>
                    123123123123123

					<button onClick={()=> {
						loader.show();
					}}>Show</button>
					<button onClick={()=> {
						loader.hide();
					}}>Hide</button>
                </div>
            </div>
    );
  }
}

export default App;
