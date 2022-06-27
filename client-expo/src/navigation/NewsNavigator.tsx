import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { NewsDetailScreen, NewsScreen } from "../screens";

export type NewsStackParams = {
  NewsDetail: { uriNews: string };
};

const Stack = createNativeStackNavigator();

const NewsNavigator = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="News" component={NewsScreen} />
    <Stack.Screen
      name="NewsDetail"
      component={NewsDetailScreen}
      options={{
        title: "Chi tiết tin tức"
      }}
    />
  </Stack.Navigator>
);

export default NewsNavigator;
