// libs
import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MainScreensProp } from "../../../../navigation/MainNavigator";
// others
import styles from "./styles";

export interface INewsProps {
  imageURI: string;
  title: string;
  uri: string;
}

const LastestNewsItem = ({ imageURI, title, uri }: INewsProps) => {
  const navigation = useNavigation<MainScreensProp>();

  return (
    <TouchableOpacity
      style={styles.lastestNewsItemWrapper}
      onPress={
        () =>
          // eslint-disable-next-line implicit-arrow-linebreak
          navigation.navigate("NewsNavigator", {
            screen: "NewsDetail",
            params: { uriNews: uri }
          })
        // eslint-disable-next-line react/jsx-curly-newline
      }
    >
      <Image
        resizeMode="cover"
        style={{ width: 280, height: 150 }}
        source={{ uri: imageURI }}
        borderRadius={20}
      />
      <Text style={styles.titleNews}>{title}</Text>
      <Text style={styles.descriptionNews}>{title}</Text>
    </TouchableOpacity>
  );
};
export default LastestNewsItem;
