import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  PixelRatio,
  Image,
  Modal,
  ToastAndroid
} from "react-native";
import { Camera, CameraType } from "expo-camera";
import ViewShot, { captureRef } from "react-native-view-shot";
import { useClock } from "react-native-timer-hooks";
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5
} from "@expo/vector-icons";
import * as API from "../../../api/trash";
import { PredictionResult } from "../../../models/PredictionResult";
import { SearchIconURLConcept } from "../../../dataSources/TrashConcepts";

interface IClassificationCameraProps {
  turnOffCamera: () => void;
  capture: (uri: string) => void;
}

const ClassificationCamera: React.FC<IClassificationCameraProps> = ({
  turnOffCamera,
  capture
}) => {
  // eslint-disable-next-line no-unused-vars
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const ref = useRef(null);
  const targetPixelCount = 240; // If you want full HD pictures
  const pixelRatio = PixelRatio.get(); // The pixel ratio of the device
  // pixels * pixelratio = targetPixelCount, so pixels = targetPixelCount / pixelRatio
  const pixels = targetPixelCount / pixelRatio;
  // eslint-disable-next-line no-unused-vars
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [counter, start, pause, reset, isRunning] = useClock(0, 5000, false);
  const [predictionObj, setPredictionObj] = useState();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  });

  const detectFrame = (url: string) => {
    API.getTrashClassification(url)
      .then((res: any) => {
        const predictionResults: PredictionResult[] = res.data?.predictionResult;
        setPredictionObj(predictionResults[0]);
      })
      .catch((err: any) => {
        console.log(err);
        setPredictionObj(undefined);
      });
  };

  const frameCapture = () => {
    if (!isRunning) {
      return;
    }

    captureRef(ref, {
      result: "base64",
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

  const ControlCameraCard = () => (
    <View style={styles.borderCameraCard}>
      <View style={styles.cameraCard}>
        <TouchableOpacity
          style={{
            width: "30%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center"
          }}
          onPress={() => {
            // eslint-disable-next-line no-unused-expressions
            isRunning ? pause() : start();
          }}
        >
          {!isRunning && <Ionicons name="ios-scan" size={24} color="black" />}
          {isRunning && (
            <FontAwesome5 name="stop-circle" size={24} color="black" />
          )}
          <Text style={{ fontSize: 12 }}>{isRunning ? "Pause" : "Scan"}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: "40%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center"
          }}
          onPress={() => {
            pause();
            console.log("chụp");
            captureRef(ref, {
              result: "data-uri",
              height: pixels,
              width: pixels,
              quality: 1,
              format: "png"
            }).then(
              (uri) => {
                capture(uri);
                ToastAndroid.show(
                  "Rác thải đã được chụp lại và lưu trữ",
                  ToastAndroid.SHORT
                );
              },
              // eslint-disable-next-line no-console
              (error) => console.error("Oops, snapshot failed", error)
            );
          }}
        >
          <View style={styles.borderButtonCapture}>
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: "green",
                borderRadius: 50
              }}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: "30%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center"
          }}
          onPress={() => {
            setType(
              type === CameraType.back ? CameraType.front : CameraType.back
            );
          }}
        >
          <MaterialCommunityIcons
            name="camera-flip-outline"
            size={24}
            color="black"
          />
          <Text style={{ fontSize: 12 }}>Flip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const ClassificationTitleCard = () => (
    <View style={styles.classificationCard}>
      <TouchableOpacity
        style={styles.exitCard}
        onPress={() => {
          pause();
          turnOffCamera();
        }}
      >
        <Ionicons name="arrow-back" size={30} color="black" />
      </TouchableOpacity>

      <View
        style={{
          ...styles.ObjectCard,
          opacity: predictionObj === undefined ? 0 : 1
        }}
      >
        <Image
          style={{ width: 55, height: 55, borderRadius: 15, marginRight: 16 }}
          source={{
            uri: SearchIconURLConcept(predictionObj?.name ?? "Trash")
          }}
        />
        <View style={{ flexDirection: "column", width: "80%" }}>
          {predictionObj && (
            <View>
              <Text style={{ fontSize: 13, fontWeight: "600", color: "green" }}>
                {predictionObj.name}
              </Text>
              <Text style={{ fontSize: 12, fontWeight: "200", width: "90%" }}>
                These are recyclable materials, please dispose of them!
              </Text>
            </View>
          )}
        </View>
        <View />
      </View>
    </View>
  );

  return (
    <Modal animationType="slide" transparent style={styles.container}>
      <ViewShot ref={ref} style={styles.container}>
        <Camera style={styles.camera} type={type} ratio="16:9" />
        <ControlCameraCard />
        <ClassificationTitleCard />
      </ViewShot>
    </Modal>
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
  },
  borderCameraCard: {
    width: "80%",
    height: 90,
    backgroundColor: "transparent",
    position: "absolute",
    bottom: 30,
    alignSelf: "center",
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    shadowOpacity: 0.2,
    elevation: 4,
    shadowColor: "whitesmoke"
  },
  classificationCard: {
    width: "90%",
    height: 60,
    backgroundColor: "transparent",
    position: "absolute",
    top: 20,
    alignSelf: "center",
    borderRadius: 20,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row"
  },
  exitCard: {
    width: "20%",
    height: 50,
    backgroundColor: "whitesmoke",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.3,
    margin: 5
  },
  ObjectCard: {
    width: "70%",
    height: 70,
    backgroundColor: "white",
    borderRadius: 20,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: 8
  },
  cameraCard: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    borderRadius: 15,
    flexDirection: "row"
  },
  borderButtonCapture: {
    width: 60,
    height: 60,
    backgroundColor: "transparent",
    borderRadius: 50,
    borderWidth: 5,
    borderColor: "green",
    shadowOpacity: 15,
    justifyContent: "center",
    alignItems: "center",
    padding: 8
  }
});

export default ClassificationCamera;
