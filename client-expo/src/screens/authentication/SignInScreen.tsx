import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { colors } from "../../constants";
import { AuthStackParams } from "../../navigation/AuthenticationNavigator";
import { CustomButton, CustomInput } from "../../components";
import UPrecycleText from "../../assets/i18n/vn";
import { firebaseApp } from "../../api/firebase";

type authScreenProp = NativeStackNavigationProp<AuthStackParams>;

const SignInScreen = () => {
  const auth = getAuth(firebaseApp);
  const navigation = useNavigation<authScreenProp>();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (errorMessage !== "") {
      Alert.alert(UPrecycleText.NOTIFICATION, errorMessage);
    }
    return () => {
      setErrorMessage("");
    };
  }, [errorMessage]);

  const reset = () => {
    setEmail("");
    setPassword("");
  };

  const userLogin = () => {
    if (email === "" || password === "") {
      setErrorMessage(UPrecycleText.EMPTY_EMAIL_OR_PASSWORD);

      Alert.alert(UPrecycleText.NOTIFICATION, errorMessage, [
        { text: "OK", onPress: () => setErrorMessage("") }
      ]);
    } else {
      // setIsLoading(true);

      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          reset();
        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            setErrorMessage(UPrecycleText.EMAIL_ALREADY_IN_USE);
          } else if (error.code === "auth/invalid-email") {
            setErrorMessage(UPrecycleText.INVALID_EMAIL);
          } else if (
            error.code === "auth/wrong-password"
            || error.code === "auth/user-not-found"
          ) {
            setErrorMessage(UPrecycleText.WRONG_EMAIL_OR_PASSWORD);
          }
          Alert.alert(UPrecycleText.NOTIFICATION, errorMessage, [
            { text: "OK", onPress: () => setErrorMessage("") }
          ]);
        });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Header</Text>
      </View>
      <View style={styles.footer}>
        <CustomInput
          label={UPrecycleText.EMAIL}
          placeholder={UPrecycleText.INPUT_EMAIL}
          onChangeText={setEmail}
        />
        <CustomInput
          label={UPrecycleText.PASSWORD}
          placeholder={UPrecycleText.INPUT_PASSWORD}
          security
          onChangeText={setPassword}
        />

        <View style={{ height: 16 }} />

        <CustomButton label={UPrecycleText.SIGN_IN} onPress={userLogin} />
        <CustomButton
          label={UPrecycleText.SIGN_UP}
          buttonColor="white"
          textColor="black"
          onPress={() => navigation.navigate("SignUp")}
        />
      </View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  footer: {
    flex: 2,
    backgroundColor: "white",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    padding: 32
  }
});
