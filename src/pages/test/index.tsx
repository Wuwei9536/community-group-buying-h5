import React, { Component } from 'react';
import history from '../../common/history';
import App from '../home';

export default class Test extends Component {
  componentDidMount() {
    console.log(this.props);
    console.log('didmount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    // 1.
    // const componentA = React.createElement(App, this.props);
    // const componentB = React.createElement(App, this.props);
    // console.log(componentA.type === componentB.type, componentA.type); // true

    // // 2.
    // const componentC = React.createElement(() => <App />, this.props);
    // const componentD = React.createElement(() => <App />, this.props);
    console.log((() => <App />)().type === (() => <App />)().type); // false
    console.log('render');
    return <div onClick={() => history.push(`/${new Date().valueOf()}`)}>{new Date().valueOf()}</div>;
  }
}
