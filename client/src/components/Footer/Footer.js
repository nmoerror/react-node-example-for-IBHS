import React, { Component } from "react";
import styled from "styled-components";

const FooterSection = styled.div`
  background: white;
  margin: 0 0 0 14rem;
  padding: 2rem 1rem 1rem 0rem;
  text-align: end;
  color: #555;
`;

export class Footer extends Component {
  render() {
    return <FooterSection>©SheSharp {new Date().getFullYear()}</FooterSection>;
  }
}

export default Footer;
