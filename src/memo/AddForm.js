import React, { Component } from "react";
import { connect } from "react-redux";
import { addMemo } from "./Store";
import styled from "styled-components";


class AddForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      message: ''
    }
    this.doChange = this.doChange.bind(this);
    this.doAction = this.doAction.bind(this);
  }

  doChange(e) {
    this.setState({
      message: e.target.value
    });
  }
  
  doAction(e) {
    e.preventDefault();
    let action = addMemo(this.state.message);
    this.props.dispatch(action);
    this.setState({
      message: ''
    });
  }

  render() {
    return (
      <div>
        <Message>{this.props.message}</Message>
        <form onSubmit={this.doAction}>
          <Input type='text' size='40' onChange={this.doChange} value={this.state.message} required />
          <Btn type='submit' value='Add' />
        </form>
      </div>
    );
  }
}

export default connect(state => state)(AddForm);

const Input = styled.input`
  font-size: 13px;
  color: #006;
  padding: 1px;
  margin: 5px 0;
`

const Btn = styled.input`
  font-size: 17px;
  color: #006;
  padding: 2px 10px;
`

const Message = styled.p`
  font-size: 19px;
  color: #006;
  margin: 5px 10px;
`
