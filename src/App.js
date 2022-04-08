import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home, Page404} from "./Pages";

class App extends Component {
  // componentDidMount() {
  //     this.props.hideLoader();
  // }
  render() {
    return (
      <React.Fragment>
        <Router>
          <Navbar mainlogo="earth-logo.png" stickylogo="earth-logo.png" />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/*" component={Page404} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
