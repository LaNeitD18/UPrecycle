import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import {
  faBell,
  faKey,
  faRightFromBracket,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { signOut, getAuth } from "firebase/auth";

import { colors, sizes } from "../../constants";
import SettingRow from "./components/SettingRow";
import UPrecycleText from "../../assets/i18n/vn";

const userImage = require("../../assets/images/user.png");

const SettingsScreen = () => {
  const auth = getAuth();

  const handleSignOut = () => {
    signOut(auth).then(() => console.log("User signed out!"));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={{
            alignSelf: "center",
            width: 128,
            height: 128,
            marginBottom: 8
          }}
          source={userImage}
        />
        <Text
          style={{
            fontWeight: "bold",
            alignSelf: "center",
            fontSize: sizes.h2,
            marginBottom: 8
          }}
        >
          User Name Here
        </Text>
        <Text
          style={{
            alignSelf: "center",
            fontSize: sizes.base,
            color: colors.darkgray
          }}
        >
          Email Here@gm.com
        </Text>
      </View>
      <View style={styles.body}>
        <View>
          <SettingRow
            icon={faUser}
            text={UPrecycleText.USER_INFO}
            onPress={() => {}}
          />
          <SettingRow
            icon={faKey}
            text={UPrecycleText.CHANGE_PASSWORD}
            onPress={() => {}}
          />
          <SettingRow
            icon={faBell}
            text={UPrecycleText.NOTIFICATION}
            onPress={() => {}}
          />
        </View>
        <View style={styles.signOutBtnView}>
          <TouchableOpacity style={styles.signOutBtn} onPress={handleSignOut}>
            <FontAwesomeIcon icon={faRightFromBracket} color={colors.red} />
            <Text style={styles.signOutBtnText}>{UPrecycleText.SIGN_OUT}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    margin: 8,
    padding: 0,
    height: "100%"
  },
  header: {
    marginBottom: 16,
    flex: 1
  },
  body: {
    backgroundColor: "white",
    borderRadius: 16,
    margin: 8,
    marginBottom: 16,
    paddingHorizontal: 8,
    paddingVertical: 16,
    flex: 2,
    justifyContent: "space-between"
  },
  signOutBtnView: {
    width: "100%",
    alignItems: "center"
  },
  signOutBtn: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 8
  },
  signOutBtnText: {
    fontSize: sizes.base,
    color: colors.red,
    fontWeight: "600",
    marginHorizontal: 8
  }
});
