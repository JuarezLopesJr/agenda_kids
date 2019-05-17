import React, { Component } from "react";
import { Image } from "react-native";
import { images } from "../utils/images";
import styled from "styled-components/native";

const ImageContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

class SplashScreen extends Component {
  componentDidMount() {
    this.checkAuth();
  }

  checkAuth = () => {
    setTimeout(() => {
      this.props.navigation.navigate("Auth");
    }, 100);
  };

  render() {
    return (
      <ImageContainer>
        <Image source={images.splashIcon} />
      </ImageContainer>
    );
  }
}

export default SplashScreen;
