import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignInScreen, SignUpScreen } from "../screens";
import { NavigationContainer } from "@react-navigation/native";

export type AuthStackParams = {
  SignIn: undefined;
  SignUp: undefined;
}

const Stack = createNativeStackNavigator();

const AuthenticationNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthenticationNavigator;