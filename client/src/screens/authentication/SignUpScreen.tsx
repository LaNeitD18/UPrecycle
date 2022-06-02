import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Icon } from "@rneui/themed";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Alert, ActivityIndicator } from "react-native";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import { colors } from "../../constants";
import { AuthStackParams } from "../../navigation/AuthenticationNavigator";

import auth from "@react-native-firebase/auth";
import UPrecycleText from "../../assets/i18n/vn";

const SignUpScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParams>>();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (errorMessage !== "") {
      Alert.alert("Thông báo", errorMessage);
    }
  }, [errorMessage]);

  const reset = () => {
    setEmail("");
    setPassword("");
    setIsLoading(false);
  };

  const registerUser = () => {
    if (email === "" || password === "") {
      setErrorMessage("Không thể để trống email hoặc password!");
      Alert.alert("Thông báo", errorMessage, [
        { text: "OK", onPress: () => setErrorMessage("") },
      ]);
    } else {
      setIsLoading(true);

      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          // const { uid } = auth().currentUser;
          navigation.navigate("SignIn");
          reset();
        })
        .catch((error) => {
          // set isLoading to false b/c if not, SignUpScreen will return Loading screen and stay there
          setIsLoading(false);

          if (error.code === "auth/email-already-in-use") {
            setErrorMessage(UPrecycleText.EMAIL_ALREADY_IN_USE);
          } else if (error.code === "auth/invalid-email") {
            setErrorMessage(UPrecycleText.INVALID_EMAIL);
          } else if (error.code === "auth/weak-password") {
            setErrorMessage(UPrecycleText.WEAK_PASSWORD);
          }
          Alert.alert("Thông báo", errorMessage, [
            { text: "OK", onPress: () => setErrorMessage("") },
          ]);
          console.log(error);
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
          onChangeText={setEmail}
        />

        <CustomInput
          label={UPrecycleText.PASSWORD}
          placeholder={UPrecycleText.INPUT_PASSWORD}
          security={true}
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
}

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  header: {
    flex: 1,
    padding: 16
  },
  footer: {
    flex: 2,
    backgroundColor: 'white',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    padding: 32
  },
});