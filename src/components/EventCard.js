import React from "react";
import { View, Text, StyleSheet } from "react-native";

const EventCard = ({ children }) => {
  return <View style={styles.cardContainer}>{children}</View>;
};

const styles = StyleSheet.create({
  cardContainer: {
    borderWidth: 1,
    borderLeftColor: "#733dbe",
    borderLeftWidth: 3,
    borderRadius: 2,
    borderTopColor: "#DDD",
    borderBottomColor: "#DDD",
    borderRightColor: "#DDD",
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
});

export default EventCard;
