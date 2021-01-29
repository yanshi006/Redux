import React from "react";
import { connect } from "react-redux";
import AddForm from "./memo/AddForm";
import DelForm from "./memo/DelForm";
import FindForm from "./memo/FindForm";
import Memo from "./memo/Memo";
import styled from "styled-components";

const App = () => {

    return (
      <div>
        <h1>Memo</h1>
        <AddForm /> 
        {/* 1本線 */}
        <hr />
        <table>
          <tbody>
            <tr>
              <Td><FindForm /></Td>
              <Td><DelForm /></Td>
            </tr>
          </tbody>
        </table>
        <Memo />
      </div>
    )
  }

//Appコンポーネントはstoreの情報を使っていないからコネクトする必要はない。
export default connect()(App);

const Td = styled.td`
  width: 260px
`