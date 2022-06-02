import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors } from "../constants";

type Props = {
  label: string;
  onPress: () => void;
  // eslint-disable-next-line react/require-default-props
  buttonColor?: string;
  // eslint-disable-next-line react/require-default-props
  textColor?: string;
};

const CustomButton: React.FC<Props> = ({
  label,
  onPress,
  buttonColor = colors.primary,
  textColor = colors.white
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      styles.button,
      {
        backgroundColor: buttonColor
      }
    ]}
  >
    <Text style={[styles.text, { color: textColor }]}>{label}</Text>
  </TouchableOpacity>
);

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginTop: 16,
    borderColor: colors.primary,
    borderWidth: 1
  },
  text: {
    fontSize: 18,
    fontWeight: "bold"
  }
});
