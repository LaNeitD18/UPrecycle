// libs
import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
// types
import { INewsProps } from "../LastestNewsItem";
import { MainScreensProp } from "../../../../navigation/MainNavigator";
// others
import styles from "./styles";

const HotNewsItem = ({ imageURI, title, uri }: INewsProps) => {
  // eslint-disable-next-line operator-linebreak
  const navigation = useNavigation<MainScreensProp>();
  return (
    <TouchableOpacity
      style={styles.hotNewsItemWrapper}
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
      <View>
        <Image
          resizeMode="cover"
          style={{ width: 100, height: 80 }}
          source={{ uri: imageURI }}
          borderRadius={10}
        />
      </View>

      <View style={styles.hotNewsItemWrapperInner}>
        <Text style={styles.titleNews}>{title}</Text>
        <Text style={styles.descriptionNews}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HotNewsItem;
