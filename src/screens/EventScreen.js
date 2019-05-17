import React, { Component, Fragment } from "react";
import { FlatList, ActivityIndicator, SectionList } from "react-native";
import axios from "axios";
import EventList from "../components/EventList";
import HeaderComponent from "../components/HeaderComponent";
import request from "../utils/api";
import { Spinner } from "../utils/styles";

const api = axios.create({
  baseURL: request.rootUrl
});

const config = {
  headers: {
    token: request.token,
    "content-type": "application/json"
  }
};

class EventScreen extends Component {
  static navigationOptions = {
    title: "Events"
  };

  state = {
    events: [],
    page: 1,
    isLoading: false
  };

  componentDidMount() {
    this.setState({ isLoading: true }, this.getEventsData);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.events !== nextState.events) {
      return true;
    }
    return false;
  }

  getEventsData = async () => {
    const {
      data: { data }
    } = await api.get(`/events?limit=3;page=${this.state.page}`, config);
    this.setState({ events: this.state.events.concat(data), isLoading: false });
  };

  renderEventsData = () => {
    return this.state.events.map(event => {
      return <EventList key={event.id} event={event} />;
    });
  };

  loadEvents = () => {
    this.setState(
      { page: this.state.page + 1, isLoading: true },
      this.getEventsData
    );
  };

  renderSpinner = () => {
    return this.state.isLoading ? (
      <Spinner>
        <ActivityIndicator size="large" color="#733DBE" />
      </Spinner>
    ) : null;
  };

  render() {
    return (
      <Fragment>
        <HeaderComponent
          headerTitle={"Eventos"}
          pageName={this.props.navigation.state.routeName}
        />
        <FlatList
          data={this.state.events}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this.renderEventsData}
          onEndReached={this.loadEvents}
          onEndReachedThreshold={0.5}
          ListFooterComponent={this.renderSpinner}
        />
      </Fragment>
    );
  }
}

export default EventScreen;
