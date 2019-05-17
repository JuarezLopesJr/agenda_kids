import React from "react";
import { View } from "react-native";
import { KeyIcon, HeaderText } from "../utils/styles";

const LoginHeader = () => {
  return (
    <View>
      <HeaderText>Faca seu Login</HeaderText>
      <KeyIcon source={require("../../assets/key.png")} />
    </View>
  );
};

export default LoginHeader;
