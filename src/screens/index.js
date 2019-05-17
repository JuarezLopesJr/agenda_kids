import React, { Component } from "react";
import {
  createDrawerNavigator,
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";
import LoginScreen from "./LoginScreen";
import SplashScreen from "./SplashScreen";
import EventScreen from "./EventScreen";

// const EventStackNavigator = createStackNavigator(
//   {
//     EventNavigator: {
//       screen: EventScreen
//     }
//   },
//   {
//     navigationOptions: ({ navigation }) => {
//       const { routeName } = navigation.state.routes[navigation.state.index];
//       return {
//         headerTitle: routeName
//       };
//     }
//   }
// );

// const InfoDrawer = createDrawerNavigator({ Info: InfoScreen });

const AppSwitchNavigator = createSwitchNavigator(
  {
    Splash: SplashScreen,
    Auth: LoginScreen,
    Events: EventScreen
  },
  {
    initialRouteName: "Events"
  }
);

const AppContainer = createAppContainer(AppSwitchNavigator);

class Navigation extends Component {
  state = {};

  render() {
    return <AppContainer />;
  }
}

export default Navigation;
