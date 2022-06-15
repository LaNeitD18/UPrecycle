// libs
import React from "react";
import { View } from "react-native";
// components
import HotNews from "./mains/HotNews";
import LastestNews from "./mains/LastestNews";
// others
import styles from "./styles";

const NewsScreen = () => (
  <View style={styles.newsScreenWrapper}>
    <LastestNews titleList="Lastest News" />
    <HotNews titleList="Hot News" />
  </View>
);

export default NewsScreen;
