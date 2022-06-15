import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  PixelRatio
} from "react-native";
import { Camera, CameraType } from "expo-camera";
import ViewShot, { captureRef } from "react-native-view-shot";
import { useClock } from "react-native-timer-hooks";
import * as API from "../../api/trash";

const NewsScreen = () => {
  // eslint-disable-next-line no-unused-vars
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const ref = useRef(null);
  const targetPixelCount = 240; // If you want full HD pictures
  const pixelRatio = PixelRatio.get(); // The pixel ratio of the device
  // pixels * pixelratio = targetPixelCount, so pixels = targetPixelCount / pixelRatio
  const pixels = targetPixelCount / pixelRatio;
  // eslint-disable-next-line no-unused-vars
  const [counter, start, pause, reset, isRunning] = useClock(0, 2000, false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const detectFrame = (url: string) => {
    API.getTrashClassification(url)
      .then((res: any) => {
        // eslint-disable-next-line no-console
        console.log(res);
        // eslint-disable-next-line no-console
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  const frameCapture = () => {
    if (!isRunning) {
      return;
    }

    captureRef(ref, {
      result: "data-uri",
      height: pixels,
      width: pixels,
      quality: 0.5,
      format: "png"
    }).then(
      (uri) => detectFrame(uri),
      // eslint-disable-next-line no-console
      (error) => console.error("Oops, snapshot failed", error)
    );
  };

  useEffect(() => {
    frameCapture();
  });

  return (
    <ViewShot ref={ref} style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button1}
            // eslint-disable-next-line max-len
            onPress={() => {
              setType(
                type === CameraType.back ? CameraType.front : CameraType.back
              );
            }}
          >
            <Text style={styles.text}> Flip </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button2}
            onPress={() => {
              // eslint-disable-next-line no-unused-expressions
              isRunning ? pause() : start();
            }}
          >
            <Text style={styles.text}>{isRunning ? "Pause" : "Start"}</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </ViewShot>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  camera: {
    flex: 1
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    margin: 20
  },
  button1: {
    flex: 0.1,
    alignSelf: "flex-end",
    alignItems: "center"
  },
  button2: {
    flex: 0.1,
    alignSelf: "flex-end",
    alignItems: "flex-end"
  },
  text: {
    fontSize: 18,
    color: "white"
  }
});
export default NewsScreen;
