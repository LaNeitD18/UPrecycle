import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import UPrecycleText from "../assets/i18n/vn";
import { colors } from "../constants";

import {
  CampaignDetailScreen,
  HomeScreen,
  ListCampaignsScreen
} from "../screens";

export type HomeStackParams = {
  Home: undefined;
  CampaignDetail: { item: any };
  ListCampaigns: undefined;
};

const Stack = createNativeStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen
      name="CampaignDetail"
      component={CampaignDetailScreen}
      options={{
        title: UPrecycleText.CAMPAIGN_DETAIL,
        headerRight: () => <FontAwesomeIcon icon={faHeart} size={24} />
      }}
    />
    <Stack.Screen
      name="ListCampaigns"
      component={ListCampaignsScreen}
      options={{
        title: UPrecycleText.LIST_CAMPAIGNS,
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: colors.primary
        }
      }}
    />
  </Stack.Navigator>
);

export default HomeNavigator;
