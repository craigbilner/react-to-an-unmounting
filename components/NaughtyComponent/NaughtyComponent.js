import React, { Component } from 'react';
import { makeARequest } from '../../services/thirdPartyService';

export default class NaughtyComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      someValue: 'hello',
    };
  }

  componentDidMount() {
    makeARequest()
      .then(() => {
        this.setState({
          someValue: 'goodbye',
        });
      });
  }

  render() {
    return (
      <div>
        <span>i'm a naughty component, </span>
        <span>{this.state.someValue}</span>
      </div>
    );
  }
}

NaughtyComponent.displayName = 'Naughty';