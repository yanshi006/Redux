import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

class Item extends Component {
  render() {
    let d = this.props.value.created;
    let f = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
    return (
      <tr>
        <Th>No, {this.props.index}</Th>
        <Td >{this.props.value.message}</Td>
        <Data>{f}</Data>
      </tr>
    )
  }
}

export default connect()(Item);

const Th = styled.th`
  font-size: 17px;
  background-color: blue;
  color: white;
  padding: 5px 10px;
  width: 50px;
`
const Td = styled.td`
  font-size: 17px;
  background-color: white;
  color: darkblue;
  padding: 5px 10px;
  border: 1px solid lightblue;
  min-width: 300px;
`
const Data = styled.td`
  font-size: 17px;
  background-color: white;
  color: darkblue;
  padding: 5px 10px;
  border: 1px solid lightblue;
  width: 80px;
`