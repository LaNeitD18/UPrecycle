import React from "react";
import {
  NavigationContainer,
  NavigatorScreenParams
} from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp
} from "@react-navigation/native-stack";

import Tabs from "./Tabs";
import HomeNavigator, { HomeStackParams } from "./HomeNavigator";
import NewsNavigator, { NewsStackParams } from "./NewsNavigator";
import SettingsNavigator, { SettingsStackParams } from "./SettingsNavigator";

export type MainStackParams = {
  HomeNavigator: NavigatorScreenParams<HomeStackParams>;
  SettingsNavigator: NavigatorScreenParams<SettingsStackParams>;
  NewsNavigator: NavigatorScreenParams<NewsStackParams>;
};

export type MainScreensProp = NativeStackNavigationProp<MainStackParams>;

const Stack = createNativeStackNavigator();

const MainNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="HomeNavigator" component={HomeNavigator} />
      <Stack.Screen name="NewsNavigator" component={NewsNavigator} />
      <Stack.Screen name="SettingsNavigator" component={SettingsNavigator} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainNavigator;
