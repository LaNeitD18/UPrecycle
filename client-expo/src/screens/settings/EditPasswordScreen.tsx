import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { faLock, faUnlockKeyhole } from "@fortawesome/free-solid-svg-icons";
import { getAuth, signOut, updatePassword } from "firebase/auth";

import UPrecycleText from "../../assets/i18n/vn";
import { CustomButton, CustomInput } from "../../components";
import { colors } from "../../constants";

const EditPasswordScreen: React.FC = () => {
  const [newPassword, setNewPassword] = useState("");
  const [retypedPassword, setRetypedPassword] = useState("");

  const auth = getAuth();
  const user = auth.currentUser;

  const resetInput = () => {
    setNewPassword("");
    setRetypedPassword("");
  };

  const updateNewPassword = () => {
    if (user !== null) {
      if (newPassword === retypedPassword) {
        updatePassword(user, newPassword)
          .then(() => {
            resetInput();
            Alert.alert(
              "Thông báo",
              "Bạn đã cập nhật mật khẩu thành công. Vui lòng đăng nhập lại để hoàn thành.",
              [
                {
                  text: "OK",
                  onPress: () => {
                    signOut(auth);
                  }
                }
              ],
              { cancelable: false }
            );
          })
          .catch((error) => {
            console.log("err", error);
          });
      }
    }
  };

  return (
    <View style={styles.editPasswordScreenContainer}>
      <View style={styles.editPasswordScreenHeader}>
        <FontAwesomeIcon
          icon={faUnlockKeyhole}
          size={64}
          color={colors.lightPrimary}
        />
      </View>
      <CustomInput
        label={UPrecycleText.PASSWORD}
        placeholder={UPrecycleText.INPUT_PASSWORD}
        icon={faLock}
        security
        onChangeText={setNewPassword}
      />
      <CustomInput
        label={UPrecycleText.RETYPE_PASSWORD}
        placeholder={UPrecycleText.RETYPE_PASSWORD}
        icon={faLock}
        security
        onChangeText={setRetypedPassword}
      />
      <View style={styles.approveButton}>
        <CustomButton
          label={UPrecycleText.APPROVE}
          onPress={() => updateNewPassword()}
        />
      </View>
    </View>
  );
};

export default EditPasswordScreen;

const styles = StyleSheet.create({
  editPasswordScreenContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.white
  },
  editPasswordScreenHeader: {
    marginVertical: 16,
    alignItems: "center"
  },
  approveButton: {
    margin: 16
  }
});
