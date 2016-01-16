import React, { Component } from 'react';
import NaughtyComponent from '../../components/NaughtyComponent/NaughtyComponent';
import PubSubComponent from '../../components/PubSubComponent/PubSubComponent';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        show: false,
      });
    }, 1000);
  }

  render() {
    if (this.state.show) {
      return (
        <div>
          <NaughtyComponent />
          <PubSubComponent />
        </div>
      );
    }

    return (
      <div>nothing to see here</div>
    );
  }
}
