import React, { Component } from "react";
import { connect } from "react-redux";
import { findMemo } from "./Store";
import styled from "styled-components";


class FindForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      find: ''
    }
    this.doChange = this.doChange.bind(this);
    this.doAction = this.doAction.bind(this);
  }

  doChange(e) {
    this.setState({
      find: e.target.value
    });
  }

  doAction(e) {
    e.preventDefault();
    let action = findMemo(this.state.find);
    this.props.dispatch(action);
  }

  render() {
    return (
        <form onSubmit={this.doAction}>
          <Input type='text' size='10' onChange={this.doChange} value={this.state.message} />
          <Btn type='submit' value='Find' />
        </form>
    )
  }
}

export default connect(state => state)(FindForm);

const Input = styled.input`
  font-size: 17px;
  color: #006;
  padding: 0px;
`
const Btn = styled.input`
  font-size: 15px;
  color: #006;
  padding: 1px 10px;
`
