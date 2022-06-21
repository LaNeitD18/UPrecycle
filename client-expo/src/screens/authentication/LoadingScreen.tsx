import { Image } from "@rneui/themed";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import UPrecycleText from "../../assets/i18n/vn";
import { logo } from "../../assets/images";
import { colors, sizes } from "../../constants";

const LoadingScreen: React.FC = () => (
  <View style={styles.loadingScreenContainer}>
    <Image source={logo} style={styles.logoImage} resizeMode="contain" />
    <Text style={styles.appName}>{UPrecycleText.APP_NAME}</Text>
  </View>
);

export default LoadingScreen;

const styles = StyleSheet.create({
  loadingScreenContainer: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center"
  },
  logoImage: {
    width: 150,
    height: 150,
    margin: 16
  },
  appName: {
    fontSize: sizes.h1,
    fontWeight: "bold",
    color: colors.white
  }
});
