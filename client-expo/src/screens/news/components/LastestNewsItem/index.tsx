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

const LastestNewsItem = ({
  resizeMode,
  width,
  height,
  imageURI,
  title
}: ILastestNewsItemProps) => (
  <View style={styles.lastestNewsItemWrapper}>
    <Image
      resizeMode={resizeMode}
      style={{ width, height }}
      source={{ uri: imageURI }}
      borderRadius={20}
    />
    <Text style={styles.titleNews}>{title}</Text>
    <Text style={styles.descriptionNews}>{title}</Text>
  </View>
);

export default LastestNewsItem;
