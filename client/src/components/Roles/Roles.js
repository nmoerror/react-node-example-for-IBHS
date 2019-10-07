import React, { Component } from "react";
import styled from "styled-components";
import Administrators from "./Administrators";

const ThisSection = styled.div`
  min-height: 90vh;
  padding: 1rem;
  background: white;
`;

const Title = styled.text`
  font-size: 1.6rem;
  font-weight: 200;
  color: #444;
`;

export class Roles extends Component {
  render() {
    return (
      <ThisSection>
        <Title>Current Administrators</Title>
        <Administrators />
      </ThisSection>
    );
  }
}

export default Roles;
