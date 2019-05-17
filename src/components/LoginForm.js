import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Input, InputContainer } from "../utils/styles";

class LoginForm extends Component {
  handleChange = value => {
    this.props.onChange(this.props.name, value);
  };

  handleTouch = () => {
    this.props.onTouch(this.props.name);
  };

  render() {
    const { label, error, ...rest } = this.props;
    return (
      <InputContainer>
        <Text>{label}</Text>
        <Input
          placeholder={label}
          {...rest}
          onChangeText={this.handleChange}
          onBlur={this.handleTouch}
        />
        {error && (
          <Text style={{ color: "red", marginBottom: 3 }}>{error}</Text>
        )}
      </InputContainer>
    );
  }
}

export default LoginForm;
