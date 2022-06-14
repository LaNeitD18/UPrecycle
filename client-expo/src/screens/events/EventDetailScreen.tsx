import React, { useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { WebView } from "react-native-webview";

import { HomeStackParams } from "../../navigation/HomeNavigator";
import { colors } from "../../constants";

const EventDetailScreen: React.FC = () => {
  const route = useRoute<RouteProp<HomeStackParams, "EventDetail">>();

  const { item } = route.params;

  const [isLoading, setIsLoading] = useState(false);

  return (
    <View style={styles.eventDetailScreenContainer}>
      <WebView
        source={{ uri: item?.uri }}
        onLoadStart={() => setIsLoading(true)}
        onLoad={() => setIsLoading(false)}
      />
      {isLoading && (
        <ActivityIndicator
          size="large"
          color={colors.primary}
          style={styles.loadingView}
        />
      )}
    </View>
  );
};

export default EventDetailScreen;

const styles = StyleSheet.create({
  eventDetailScreenContainer: {
    flex: 1
  },
  loadingView: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
});
