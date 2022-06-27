import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { StyleSheet, View } from "react-native";
import {
  faEnvelope,
  faImagePortrait,
  faUser
} from "@fortawesome/free-solid-svg-icons";

import UPrecycleText from "../../assets/i18n/vn";
import { CustomButton, CustomInput } from "../../components";
import { colors } from "../../constants";
import { useAppSelector } from "../../hooks/reduxHooks";

const UserScreen: React.FC = () => {
  const user = useAppSelector((state) => state.user);

  return (
    <View style={styles.userScreenContainer}>
      <View style={styles.userScreenHeader}>
        <FontAwesomeIcon
          icon={faImagePortrait}
          size={64}
          color={colors.lightPrimary}
        />
      </View>
      <CustomInput
        label={UPrecycleText.EMAIL}
        text={user.email}
        editable={false}
        icon={faEnvelope}
      />
      <CustomInput
        label={UPrecycleText.ACCOUNT_NAME}
        text={user.name}
        icon={faUser}
      />
      <View style={styles.approveButton}>
        <CustomButton label={UPrecycleText.APPROVE} onPress={() => {}} />
      </View>
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  userScreenContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.white
  },
  userScreenHeader: {
    marginVertical: 16,
    alignItems: "center"
  },
  approveButton: {
    margin: 16
  }
});
