import React from "react";
import { Text, View, TouchableOpacity, Alert } from "react-native";
import { Icon } from "react-native-elements";
import { MenuIcon } from "../utils/styles";

const Header = ({ headerTitle, pageName }) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{headerTitle}</Text>
      <MenuIcon>
        <TouchableOpacity
          onPress={() => Alert.alert(` ⌨   with  💜  by   Juarez Lopes `)}
        >
          <Icon
            type="entypo"
            name={pageName === "Events" ? "menu" : null}
            size={30}
          />
        </TouchableOpacity>
      </MenuIcon>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
    height: 90,
    paddingRight: 135,
    width: "100%",
    paddingTop: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: "relative"
  },
  textStyle: {
    fontSize: 20,
    color: "#000000"
  }
};

export default Header;
