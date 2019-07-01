import React, { Component } from "react";
import {
  OuterCounterWrapper,
  InnerCounterWrapper,
  CounterInput,
  CounterText,
  Button
} from "../styles/styled";

class Counter extends Component {
  render() {
    return (
      <OuterCounterWrapper>
        <CounterText># OF UNITS</CounterText>
        <InnerCounterWrapper>
          <Button onClick={this.props.decrement}>-</Button>
          <CounterInput
            name="count"
            type="text"
            value={this.props.count}
            onChange={this.props.changeHandler}
          />
          <Button onClick={this.props.increment}>+</Button>
        </InnerCounterWrapper>
      </OuterCounterWrapper>
    );
  }
}

export default Counter;
