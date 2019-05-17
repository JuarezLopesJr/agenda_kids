import React from "react";
import { EventItems } from "../utils/styles";

const EventCardComponents = ({ children }) => {
  return <EventItems>{children}</EventItems>;
};

export default EventCardComponents;
