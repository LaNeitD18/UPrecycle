import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import UPrecycleText from "../assets/i18n/vn";

import { EventDetailScreen, HomeScreen } from "../screens";

export type HomeStackParams = {
  Home: undefined;
  EventDetail: { item: any };
  ListEvents: undefined;
};

const Stack = createNativeStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen
      name="EventDetail"
      component={EventDetailScreen}
      options={{
        title: UPrecycleText.EVENT_DETAIL,
        headerRight: () => <FontAwesomeIcon icon={faHeart} size={24} />
      }}
    />
    <Stack.Screen name="ListEvents" component={EventDetailScreen} />
  </Stack.Navigator>
);

export default HomeNavigator;
