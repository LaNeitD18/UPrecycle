// libs
import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./styles";

interface ILastestNewsItemProps {
  imageURI: string;
  title: string;
}

const LastestNewsItem = ({ imageURI, title }: ILastestNewsItemProps) => (
  <View style={styles.lastestNewsItemWrapper}>
    <Image
      resizeMode="cover"
      style={{ width: 280, height: 150 }}
      source={{ uri: imageURI }}
      borderRadius={20}
    />
    <Text style={styles.titleNews}>{title}</Text>
    <Text style={styles.descriptionNews}>{title}</Text>
  </View>
);

export default LastestNewsItem;
