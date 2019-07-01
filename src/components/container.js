import React, { Component } from "react";
import PropTypes from "prop-types";
import Counter from "./counter";
import {
  ContainerWrapper,
  InnerContainerWrapper,
  TotalCost,
  UnitCost,
  CostText,
  NumsText
} from "../styles/styled";

class Container extends Component {
  state = {
    cpu: 175.5,
    tRev: null,
    count: 0
  };

  changeHandler = e => {
    this.setState({
      count: e.target.value,
      tRev: e.target.value * this.state.cpu
    }); //if incremented after manual input, nums get added instead of incremented. Need to alter increment function.
  };

  increment = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
      tRev: this.state.cpu * this.state.count + this.state.cpu
    }));
  };

  decrement = () => {
    if (this.state.count === 0) {
      this.setState({
        count: 0
      });
    } else {
      this.setState(prevState => ({
        count: prevState.count - 1,
        tRev: this.state.cpu * this.state.count - this.state.cpu
      }));
    }
  };

  render() {
    return (
      <ContainerWrapper>
        <InnerContainerWrapper>
          <UnitCost>
            <CostText>COST PER UNIT</CostText>
            <NumsText>
              {new Intl.NumberFormat("en-US", {
                style: "currency", //currency style sets the cost at two decimals
                currency: "USD"
              }).format(this.state.cpu)}
            </NumsText>
          </UnitCost>
          <Counter
            tRev={this.state.tRev}
            increment={this.increment}
            decrement={this.decrement}
            count={this.state.count}
            changeHandler={this.changeHandler}
          />
          <TotalCost>
            <CostText>TOTAL COST</CostText>
            <NumsText>
              $
              {new Intl.NumberFormat("en-US", {
                style: "decimal", //decimal style follows the currency formatting rules stated in instructions.txt
                currency: "USD"
              }).format(this.state.tRev)}
            </NumsText>
          </TotalCost>
        </InnerContainerWrapper>
      </ContainerWrapper>
    );
  }
}

Container.propTypes = {
  cpu: PropTypes.number,
  tRev: PropTypes.string,
  count: PropTypes.number,
  increment: PropTypes.func,
  decrement: PropTypes.func
};

export default Container;
