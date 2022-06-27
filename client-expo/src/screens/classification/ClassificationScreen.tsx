/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-no-undef */
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TextInput,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { LineChart } from "react-native-chart-kit";
import { AntDesign } from "@expo/vector-icons";
import ClassificationCamera from "./components/ClassificationCamera";
import { colors } from "../../constants";
import { TrashImages } from "../../dataSources/TrashConcepts";

const screenWidth = Dimensions.get("window").width;

interface ITrashImgProps {
  uri: string;
  desiredWidth: number;
  title: string;
}

const RemoteImage: React.FC<ITrashImgProps> = ({
  uri,
  desiredWidth,
  title
}) => {
  const [desiredHeight, setDesiredHeight] = React.useState(0);

  Image.getSize(uri, (width, height) => {
    // eslint-disable-next-line no-mixed-operators
    setDesiredHeight((desiredWidth / width) * height);
  });

  return (
    <View
      style={{
        backgroundColor: "white",
        padding: 6,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: "whitesmoke"
      }}
    >
      <Image
        source={{ uri }}
        style={{
          borderWidth: 1,
          borderRadius: 15,
          width: desiredWidth,
          height: desiredHeight
        }}
      />
      <Text
        style={{
          margin: 4,
          fontSize: 15,
          fontWeight: "400",
          fontStyle: "italic"
        }}
      >
        {title}
      </Text>
    </View>
  );
};

const data = {
  labels: ["Trash", "February", "March", "April", "May", "June"],
  datasets: [
    {
      data: [60, 100, 52, 70, 40, 88, 45, 28, 80, 99, 43]
    }
  ]
};

const chartConfig = {
  backgroundGradientFrom: colors.black,
  backgroundGradientTo: colors.darkgray,
  backgroundColor: colors.black,
  backgroundGradientFromOpacity: 0,
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  style: {
    borderRadius: 16
  }
};

const ClassificationScreen = () => {
  const [isOpenCamera, setIsOpenCamera] = useState(false);
  const isFocused = useIsFocused();
  const [images, setImages] = useState(TrashImages);

  useEffect(() => {
    if (isFocused) {
      setIsOpenCamera(false);
    }
  }, [isFocused]);

  const capture = (uri: string) => {
    setImages([
      { uri, title: `Rác thải ${images.length - TrashImages.length}` },
      ...images
    ]);
  };

  const turnOffCamera = () => {
    setIsOpenCamera(false);
  };

  if (isOpenCamera) {
    return (
      <View style={styles.container}>
        <ClassificationCamera turnOffCamera={turnOffCamera} capture={capture} />
      </View>
    );
  }

  const MyCard = () => (
    <View style={{ width: "100%", height: 250 }}>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          backgroundColor: colors.primary,
          width: "100%",
          height: 200,
          borderRadius: 15,
          opacity: 0.6
        }}
      />
      <Image
        style={{
          position: "absolute",
          bottom: 80,
          left: -30,
          width: 150,
          height: 180
        }}
        source={{ uri: "https://i.ibb.co/2jpK0w1/people.png" }}
      />
      <View style={{ position: "absolute", top: 65, left: 110, width: "50%" }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "600",
            color: "whitesmoke",
            marginBottom: 8
          }}
        >
          Chào Sanh!
        </Text>
        <LineChart
          data={data}
          width={300}
          height={120}
          style={{ marginLeft: -50 }}
          chartConfig={chartConfig}
          withHorizontalLabels={false}
          bezier
        />
      </View>

      <View style={{ position: "absolute", top: 10, right: 20 }}>
        <TouchableOpacity
          style={{
            backgroundColor: "white",
            width: 70,
            height: 60,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 15,
            borderWidth: 2,
            borderColor: colors.primary
          }}
          onPress={() => setIsOpenCamera(true)}
        >
          <Image
            style={{ width: 60, height: 50, resizeMode: "stretch" }}
            source={{ uri: "https://i.ibb.co/9tt14qJ/camera.png" }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );

  const StorageCard = () => (
    <>
      <Text
        style={{ fontSize: 16, fontWeight: "500", margin: 16, marginLeft: 0 }}
      >
        Lưu Trữ
      </Text>
      <View style={{ width: "100%" }}>
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 10,
            borderWidth: 3,
            borderColor: colors.primary,
            height: 50,
            width: "80%",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            padding: 8,
            marginBottom: 16
          }}
        >
          <View style={{ width: "20%" }}>
            <AntDesign name="search1" size={24} color="black" />
          </View>

          <View style={{ width: "80%", height: 50 }}>
            <TextInput style={{ width: "100%", height: 50 }} />
          </View>
        </View>
      </View>
    </>
  );

  const ResultSearchCard = () => (
    <View style={{ flexDirection: "row", width: "100%" }}>
      <View style={{ flexDirection: "column", width: "50%" }}>
        {images.slice(0, TrashImages.length / 2).map((trash) => (
          <View style={{ width: "100%", padding: 8 }}>
            <RemoteImage
              uri={trash.uri}
              desiredWidth={screenWidth / 2 - 48}
              title={trash.title}
            />
          </View>
        ))}
      </View>

      <View style={{ flexDirection: "column", width: "50%" }}>
        {images
          .slice(TrashImages.length / 2 + 1, TrashImages.length)
          .map((trash) => (
            <View style={{ width: "100%", padding: 8 }}>
              <RemoteImage
                uri={trash.uri}
                desiredWidth={screenWidth / 2 - 48}
                title={trash.title}
              />
            </View>
          ))}
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <MyCard />
      <StorageCard />
      <ResultSearchCard />
      <View style={{ width: "100%", height: 48 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  }
});

export default ClassificationScreen;
