import React from "react";
// import { StyleSheet, View, ActivityIndicator } from "react-native";
import { AppLoading } from "expo";
import Navigation from "./src/screens";
// import HeaderComponent from "./src/components/HeaderComponent";
import { images } from "./src/utils/images";
import { RootContainer } from "./src/utils/styles";
import { cacheImages, cacheFonts } from "./src/utils/cacheAssets";
import { FontAwesome, Entypo } from "@expo/vector-icons";

export default class App extends React.Component {
  state = {
    isReady: false
  };

  componentDidMount() {
    this.loadAssets();
  }

  loadAssets = async () => {
    try {
      const imageAssets = cacheImages(Object.values(images));
      const fontAssets = cacheFonts([FontAwesome.font, Entypo.font]);
      await Promise.all([...imageAssets, ...fontAssets]);

      this.setState(() => {
        return { isReady: true };
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    if (!this.state.isReady) {
      return (
        <RootContainer>
          <AppLoading
            startAsync={this.loadAssets}
            onFinish={() => this.setState({ isReady: true })}
          />
        </RootContainer>
      );
    }
    return (
      <RootContainer>
        {/* <HeaderComponent headerTitle={"Eventos"} /> */}
        <Navigation />
      </RootContainer>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });
