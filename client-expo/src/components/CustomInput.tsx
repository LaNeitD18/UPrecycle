import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEyeSlash, IconDefinition } from "@fortawesome/free-solid-svg-icons";

import { colors } from "../constants";

type Props = {
  label: string;
  placeholder?: string;
  text?: string;
  editable?: boolean;
  security?: boolean;
  icon: IconDefinition;
  // eslint-disable-next-line no-unused-vars
  onChangeText?: (text: string) => void;
};

const CustomInput: React.FC<Props> = ({
  label,
  placeholder = "",
  text = "",
  icon,
  editable = true,
  security = false,
  onChangeText
}) => {
  const [hidePassword, setHidePassword] = useState(security);

  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>{label}</Text>
      <View style={styles.inputRow}>
        <FontAwesomeIcon icon={icon} size={20} style={styles.icon} />
        <TextInput
          defaultValue={text}
          editable={editable}
          placeholder={placeholder}
          style={[styles.input, { color: editable ? undefined : "gray" }]}
          secureTextEntry={hidePassword}
          onChangeText={onChangeText}
        />
        {security ? (
          <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
            <FontAwesomeIcon icon={faEyeSlash} size={20} />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    marginVertical: 12
  },
  labelText: {
    color: colors.black,
    fontSize: 18
  },
  inputRow: {
    flexDirection: "row",
    marginTop: 8,
    paddingHorizontal: 8,
    height: 50,
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  input: {
    flex: 1,
    paddingLeft: 8,
    color: "#05375a",
    fontSize: 16
  },
  icon: {
    marginHorizontal: 4
  }
});
