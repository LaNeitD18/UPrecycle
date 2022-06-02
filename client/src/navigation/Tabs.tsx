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
import { HomeScreen, NewsScreen, SettingsScreen, TempScreen } from "../screens";

const Tab = createBottomTabNavigator();

const Tabs = () => (
  <Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown: true }}>
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <FontAwesomeIcon
            icon={faHome}
            size={20}
            color={focused ? colors.primary : colors.darkgray}
          />
        ),
        title: "Trang chủ",
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
        title: "Tin tức",
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.darkgray,
        tabBarLabelStyle: styles.tabBarLabel
      }}
    />
    <Tab.Screen
      name="Classification"
      component={TempScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <FontAwesomeIcon
            icon={faCamera}
            size={20}
            color={focused ? colors.primary : colors.darkgray}
          />
        ),
        title: "Phân loại",
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
        title: "Tùy chỉnh",
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
