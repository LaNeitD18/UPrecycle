// libs
import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./styles";

interface ILastestNewsItemProps {
  imageURI: string;
  title: string;
}

const HotNewsItem = ({ imageURI, title }: ILastestNewsItemProps) => (
  <View style={styles.hotNewsItemWrapper}>
    <View>
      <Image
        resizeMode="contain"
        style={{ width: 100, height: 80 }}
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
