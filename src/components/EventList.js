import React from "react";
import { Image, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import moment from "moment";
import "moment/locale/pt-br";
import EventCard from "./EventCard";
import EventCardComponents from "./EventCardComponents";
import { TextContainer, ImageContainer, ClockIcon } from "../utils/styles";

const EventList = ({ event }) => {
  const { title, location, image, startAt, sendAt } = event;
  const weekDays = moment.updateLocale("pt-br", {
    months: "janeiro-fevereiro-marco-abril-maio-junho-julho-agosto-setembro-outubro-novembro-dezembro".split(
      "-"
    ),
    weekdays: "Domingo-Segunda-Terca-Quarta-Quinta-Sexta-Sabado".split("-")
  });
  return (
    <EventCard>
      <EventCardComponents>
        <ImageContainer>
          <Image source={{ uri: image }} style={{ width: 85, height: 85 }} />
        </ImageContainer>
        <TextContainer>
          <Text style={{ fontSize: 16, color: "#999999" }}>{title}</Text>
          <Text>{location}</Text>
          <Text style={{ marginLeft: 17, color: "#666666" }}>
            {moment(startAt).format("HH:mm")}
          </Text>
          <Text style={{ fontSize: 12, color: "#999999" }}>
            {moment(sendAt)
              .locale("pt-br", weekDays)
              .format("dddd, MM [de] MMMM [as] HH:mm[h]")}
          </Text>
          <ClockIcon>
            <Icon type="evilicon" name="clock" size={19} color={"#666666"} />
          </ClockIcon>
        </TextContainer>
      </EventCardComponents>
    </EventCard>
  );
};

export default EventList;
