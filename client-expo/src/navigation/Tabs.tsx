import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCamera,
  faGear,
  faHome,
  faNewspaper
} from "@fortawesome/free-solid-svg-icons";

import { colors } from "../constants";
import {
  ClassificationScreen,
  HomeScreen,
  NewsScreen,
  SettingsScreen
} from "../screens";
import UPrecycleText from "../assets/i18n/vn";

const Tab = createBottomTabNavigator();

const Tabs = () => (
  <Tab.Navigator initialRouteName="Home">
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <FontAwesomeIcon
            icon={faHome}
            size={20}
            color={focused ? colors.primary : colors.darkgray}
          />
        ),
        title: UPrecycleText.HOME_SCREEN,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.darkgray,
        tabBarLabelStyle: styles.tabBarLabel
      }}
    />
    <Tab.Screen
      name="News"
      component={NewsScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <FontAwesomeIcon
            icon={faNewspaper}
            size={20}
            color={focused ? colors.primary : colors.darkgray}
          />
        ),
        title: UPrecycleText.NEWS_SCREEN,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.darkgray,
        tabBarLabelStyle: styles.tabBarLabel
      }}
    />
    <Tab.Screen
      name="Classification"
      component={ClassificationScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <FontAwesomeIcon
            icon={faCamera}
            size={20}
            color={focused ? colors.primary : colors.darkgray}
          />
        ),
        title: UPrecycleText.CLASSIFICATION_SCREEN,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.darkgray,
        tabBarLabelStyle: styles.tabBarLabel
      }}
    />
    <Tab.Screen
      name="Settings"
      component={SettingsScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <FontAwesomeIcon
            icon={faGear}
            size={20}
            color={focused ? colors.primary : colors.darkgray}
          />
        ),
        title: UPrecycleText.SETTINGS_SCREEN,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.darkgray,
        tabBarLabelStyle: styles.tabBarLabel
      }}
    />
  </Tab.Navigator>
);

export default Tabs;

const styles = StyleSheet.create({
  tabBarLabel: {
    fontSize: 12,
    fontWeight: "600"
  }
});
