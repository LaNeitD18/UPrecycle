import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { SignInScreen, SignUpScreen } from "../screens";

export type AuthStackParams = {
  SignIn: undefined;
  SignUp: undefined;
};

const Stack = createNativeStackNavigator();

const AuthenticationNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AuthenticationNavigator;
