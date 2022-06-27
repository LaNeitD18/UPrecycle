// libs
import React, { useState } from "react";
import { ActivityIndicator, View } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
import { RouteProp, useRoute } from "@react-navigation/native";
import { WebView } from "react-native-webview";

import { NewsStackParams } from "../../navigation/NewsNavigator";
// others
import { colors } from "../../constants";
import styles from "./styles";

const NewsDetailScreen: React.FC = () => {
  const route = useRoute<RouteProp<NewsStackParams, "NewsDetail">>();

  const { uriNews } = route.params;
  const [isLoading, setIsLoading] = useState(false);

  return (
    <View style={styles.newsDetailScreenWrapper}>
      <WebView
        source={{ uri: uriNews }}
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

export default NewsDetailScreen;
