import React, { useEffect, useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import ClassificationCamera from "./components/ClassificationCamera";

const ClassificationScreen = () => {
  const [isOpenCamera, setIsOpenCamera] = useState(false);
  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) {
      setIsOpenCamera(false);
    }
  }, [isFocused]);

  const turnOffCamera = () => {
    setIsOpenCamera(false);
  };

  if (isOpenCamera) {
    return (
      <View style={styles.container}>
        <ClassificationCamera turnOffCamera={turnOffCamera} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Button
        title="Scan garbage"
        onPress={() => {
          setIsOpenCamera(true);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
export default ClassificationScreen;
