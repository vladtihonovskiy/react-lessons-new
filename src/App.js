import React, { Component } from 'react';
import Headers from "./components/Headers/Headers";
import UnderHeaderImage from "./components/UnderHeaderImage/UnderHeaderImage";
import Products from "./components/Products/Products";
import Video from "./components/Video/Video";
import ConditionOfDelivery from "./components/ConditionOfDelivery/ConditionOfDelivery";
import ConnectWithUs from "./components/ConnectWithUs/ConnectWithUs";

import classes from './App.less'

class App extends Component {

    state = {
        contactRef: null
    }

	handleScrollToElement = (event) => {
	    console.log(this.state.contactRef);

		window.scrollTo({ top: this.state.contactRef.offsetTop, behavior: 'smooth' });
	}


	setRef = (element) => {
	   this.setState({
		   contactRef: element
       })
    }


    render() {
        return (
            <div className={classes.app}>
                <Headers handleScrollToElement={this.handleScrollToElement} />
                <UnderHeaderImage />
                <Products />
                <Video />
                <ConditionOfDelivery />
                <ConnectWithUs setRef={this.setRef} />
            </div>
    );
  }
}

export default App;
