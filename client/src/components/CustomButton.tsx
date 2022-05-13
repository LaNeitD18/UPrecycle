import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../constants";

type Props = {
  label: string;
  onPress: () => void;
  buttonColor?: string;
  textColor?: string;
}

const CustomButton: React.FC<Props> = ({
  label,
  onPress,
  buttonColor = colors.primary,
  textColor = colors.white,
}) => {
  return (
    <TouchableOpacity 
      onPress={onPress} 
      style={[styles.button, { backgroundColor: buttonColor }]}
    >
      <Text style={[styles.text, { color: textColor }]}>{label}</Text>
    </TouchableOpacity>
  )
}

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