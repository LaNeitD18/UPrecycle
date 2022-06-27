// libs
import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// components
import HotNews from "./mains/HotNews";
import LastestNews from "./mains/LastestNews";
// others
import styles from "./styles";

const NewsScreen = () => (
  <SafeAreaView style={styles.newsScreenWrapper}>
    <ScrollView showsVerticalScrollIndicator={false}>
      <LastestNews titleList="Tin Mới" />
      <HotNews titleList="Tin Hot" />
    </ScrollView>
  </SafeAreaView>
);

export default NewsScreen;
