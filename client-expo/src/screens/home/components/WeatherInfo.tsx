import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { colors, sizes } from "../../../constants";

interface WeatherInfoProps {
  title: string;
  icon: IconDefinition;
  value: string;
}

const WeatherInfo: React.FC<WeatherInfoProps> = ({ title, icon, value }) => (
  <View style={styles.airQualityView}>
    <Text style={styles.title}>{title}</Text>
    <View style={styles.weatherInfoRow}>
      <FontAwesomeIcon icon={icon} size={24} color={colors.blue} />
      <Text style={styles.info}>{value}</Text>
    </View>
  </View>
);

export default WeatherInfo;

const styles = StyleSheet.create({
  airQualityView: {
    flex: 1,
    borderRadius: 12,
    backgroundColor: colors.lightCyan,
    padding: 8,
    alignItems: "center"
  },
  title: {
    fontSize: sizes.body,
    fontWeight: "600",
    marginBottom: 8
  },
  weatherInfoRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  info: {
    fontSize: sizes.h1,
    fontWeight: "bold",
    color: colors.blue,
    marginLeft: 8
  }
});
