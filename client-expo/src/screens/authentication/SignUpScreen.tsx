import React, { useEffect, useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Icon } from "@rneui/themed";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
  User
} from "firebase/auth";

import { CustomButton, CustomInput } from "../../components";
import { colors } from "../../constants";
import { AuthStackParams } from "../../navigation/AuthenticationNavigator";
import UPrecycleText from "../../assets/i18n/vn";
import { firebaseApp } from "../../api/firebase";
import { addUser } from "../../api/user";

const SignUpScreen = () => {
  const auth = getAuth(firebaseApp);
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParams>>();

  const [emailInput, setEmailInput] = useState("");
  const [password, setPassword] = useState("");
  // const [setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (errorMessage !== "") {
      Alert.alert(UPrecycleText.NOTIFICATION, errorMessage);
    }
    return () => {
      setErrorMessage("");
    };
  }, [errorMessage]);

  const clearInput = () => {
    setEmailInput("");
    setPassword("");
    // setIsLoading(false);
  };

  const addNewUser = async (user: User) => {
    const { uid, displayName, email } = user;
    const userData = {
      id: uid,
      name: displayName,
      email
    };
    await addUser(userData);
  };

  const registerUser = () => {
    if (emailInput === "" || password === "") {
      setErrorMessage(UPrecycleText.EMPTY_EMAIL_OR_PASSWORD);
      Alert.alert(UPrecycleText.NOTIFICATION, errorMessage, [
        { text: "OK", onPress: () => setErrorMessage("") }
      ]);
    } else {
      // setIsLoading(true);
      const accountName = emailInput.split("@")[0];

      createUserWithEmailAndPassword(auth, emailInput, password)
        .then(async (res) => {
          await updateProfile(res.user, {
            displayName: accountName
          });
          addNewUser(res.user);
          clearInput();
          navigation.navigate("SignIn");
        })
        .catch((error) => {
          // set isLoading to false b/c if not, SignUpScreen will return Loading screen & stay there
          // setIsLoading(false);

          if (error.code === "auth/email-already-in-use") {
            setErrorMessage(UPrecycleText.EMAIL_ALREADY_IN_USE);
          } else if (error.code === "auth/invalid-email") {
            setErrorMessage(UPrecycleText.INVALID_EMAIL);
          } else if (error.code === "auth/weak-password") {
            setErrorMessage(UPrecycleText.WEAK_PASSWORD);
          }
          Alert.alert(UPrecycleText.NOTIFICATION, errorMessage, [
            { text: "OK", onPress: () => setErrorMessage("") }
          ]);
        });
    }
  };

  // if (isLoading) {
  //   return (
  //     <View>
  //       <ActivityIndicator size="large" color="#9E9E9E" />
  //     </View>
  //   );
  // }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon
          name="arrow-back"
          size={32}
          color={colors.white}
          style={{ width: 32 }}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.footer}>
        <CustomInput
          label={UPrecycleText.EMAIL}
          placeholder={UPrecycleText.INPUT_EMAIL}
          onChangeText={setEmailInput}
        />

        <CustomInput
          label={UPrecycleText.PASSWORD}
          placeholder={UPrecycleText.INPUT_PASSWORD}
          security
          onChangeText={setPassword}
        />

        <View style={{ height: 16 }} />

        <CustomButton
          label={UPrecycleText.SIGN_UP}
          buttonColor="white"
          textColor="black"
          onPress={registerUser}
        />
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary
  },
  header: {
    flex: 1,
    padding: 16
  },
  footer: {
    flex: 2,
    backgroundColor: "white",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    padding: 32
  }
});
