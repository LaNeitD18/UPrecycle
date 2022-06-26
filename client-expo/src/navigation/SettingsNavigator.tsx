import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import UPrecycleText from "../assets/i18n/vn";
import { EditPasswordScreen, SettingsScreen, UserScreen } from "../screens";

export type SettingsStackParams = {
  Settings: undefined;
  User: undefined;
  EditPassword: undefined;
};

const Stack = createNativeStackNavigator();

const SettingsNavigator = () => (
  <Stack.Navigator initialRouteName="Settings">
    <Stack.Screen name="Settings" component={SettingsScreen} />
    <Stack.Screen
      name="User"
      component={UserScreen}
      options={{
        title: UPrecycleText.USER_INFO
      }}
    />
    <Stack.Screen
      name="EditPassword"
      component={EditPasswordScreen}
      options={{
        title: UPrecycleText.EDIT_PASSWORD
      }}
    />
  </Stack.Navigator>
);

export default SettingsNavigator;
