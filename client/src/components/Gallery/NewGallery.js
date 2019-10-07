import React, { Component } from "react";
import styled from "styled-components";

const ThisSection = styled.div`
  min-height: 90vh;
  padding: 1rem;
  background: white;
`;

export class NewGallery extends Component {
  render() {
    return <ThisSection>NewGallery</ThisSection>;
  }
}

export default NewGallery;
