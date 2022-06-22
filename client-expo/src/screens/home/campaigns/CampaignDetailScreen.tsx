import React, { useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { WebView } from "react-native-webview";

import { HomeStackParams } from "../../../navigation/HomeNavigator";
import { colors } from "../../../constants";

const CampaignDetailScreen: React.FC = () => {
  const route = useRoute<RouteProp<HomeStackParams, "CampaignDetail">>();

  const { item } = route.params;

  const [isLoading, setIsLoading] = useState(false);

  return (
    <View style={styles.campaignDetailScreenContainer}>
      <WebView
        source={{ uri: item?.contentUrl }}
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

export default CampaignDetailScreen;

const styles = StyleSheet.create({
  campaignDetailScreenContainer: {
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
