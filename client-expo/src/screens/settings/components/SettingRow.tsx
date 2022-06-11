import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { Divider } from "@rneui/base";

import { colors, sizes } from "../../../constants";

interface SettingRowProps {
  icon: IconDefinition;
  text: string;
  onPress: () => void;
}

const SettingRow: React.FC<SettingRowProps> = ({ icon, text, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.settingRowContainer}>
    <View style={styles.row}>
      <View style={styles.content}>
        <FontAwesomeIcon
          style={styles.leftIcon}
          icon={icon}
          size={20}
          color={colors.primary}
        />
        <Text style={styles.text}>{text}</Text>
      </View>
      <FontAwesomeIcon icon={faAngleRight} color={colors.darkgray} />
    </View>
    <View style={styles.divider}>
      <Divider />
    </View>
  </TouchableOpacity>
);

export default SettingRow;

const styles = StyleSheet.create({
  settingRowContainer: {
    marginVertical: 16
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    paddingHorizontal: 8
  },
  content: {
    display: "flex",
    flexDirection: "row"
  },
  divider: {
    paddingLeft: 45,
    marginTop: 8
  },
  text: {
    fontWeight: "600",
    fontSize: sizes.base
  },
  leftIcon: {
    marginRight: 16
  }
});
