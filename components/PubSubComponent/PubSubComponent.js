import React, { Component } from 'react';
import { makeARequest } from '../../services/thirdPartyService';

export default class PubSubComponent extends Component {
  constructor(props) {
    super(props);

    this.subscribers = [];

    this.state = {
      someValue: 'hello',
    };

    this.setGoodBye = this.setGoodBye.bind(this);
  }

  componentDidMount() {
    this.subscribe(this.setGoodBye);
    makeARequest()
      .then(this.fireSubscribers.bind(this));
  }

  componentWillUnmount() {
    this.unsubscribe(this.setGoodBye);
  }

  setGoodBye() {
    this.setState({
      someValue: 'goodbye',
    });
  }

  fireSubscribers() {
    this.subscribers.forEach(sub => {
      sub();
    });
  }

  subscribe(func) {
    this.subscribers.push(func);
  }

  unsubscribe(func) {
    this.subscribers = this.subscribers.reduce((arr, sub) => {
      if (sub !== func) {
        arr.push(sub);
      }

      return arr;
    }, []);
  }

  render() {
    return (
      <div>
        <span>i'm a pub sub component, </span>
        <span>{this.state.someValue}</span>
      </div>
    );
  }
}
