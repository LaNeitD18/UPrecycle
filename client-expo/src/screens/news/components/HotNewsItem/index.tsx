// libs
import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./styles";

interface ILastestNewsItemProps {
  resizeMode?: "center" | "contain" | "cover" | "stretch" | "repeat";
  width?: string | number;
  height?: string | number;
  imageURI: string;
  title: string;
}

const HotNewsItem = ({
  resizeMode,
  width,
  height,
  imageURI,
  title
}: ILastestNewsItemProps) => (
  <View style={styles.hotNewsItemWrapper}>
    <View>
      <Image
        resizeMode={resizeMode}
        style={{ width, height }}
        source={{ uri: imageURI }}
        borderRadius={10}
      />
    </View>

    <View style={styles.hotNewsItemWrapperInner}>
      <Text style={styles.titleNews}>{title}</Text>
      <Text style={styles.descriptionNews}>{title}</Text>
    </View>
  </View>
);

export default HotNewsItem;
