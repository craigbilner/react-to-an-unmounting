import React, { Component } from 'react';
import NaughtyComponent from '../../components/NaughtyComponent/NaughtyComponent';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        show: false,
      });
    }, 1000);
  }

  render() {
    return (
      <NaughtyComponent />
    );
  }
}
