import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Avatar } from "@rneui/themed";

import { sizes } from "../../../constants";
import { useAppSelector } from "../../../hooks/reduxHooks";

const HomeHeader: React.FC = () => {
  const user = useAppSelector((state) => state.user);

  return (
    <View style={styles.header}>
      <View style={styles.userInfoRow}>
        <Avatar
          source={{
            uri: "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"
          }}
          rounded
          size={40}
        />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{user.name}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => {}}>
        <FontAwesomeIcon icon={faBell} size={24} />
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16
  },
  userInfoRow: {
    display: "flex",
    flexDirection: "row"
  },
  userInfo: {
    marginLeft: 8
  },
  userName: {
    fontSize: sizes.body,
    fontWeight: "600"
  }
});
