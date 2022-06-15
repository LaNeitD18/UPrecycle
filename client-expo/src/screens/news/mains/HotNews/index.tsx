// libs
import React from "react";
import { FlatList } from "react-native";
// components
import BlankCard from "../../../../components/BlankCard";
import HotNewsItem from "../../components/HotNewsItem";
import Divider from "../../../../components/Divider";
// mocks
import lastestNewsMock from "../../../../mocks/LastestNews";
import styles from "./styles";

interface TitleProps {
  titleList: string;
}

const HotNews = ({ titleList }: TitleProps) => (
  <BlankCard headingTitle={titleList} cardStyle={styles.hotNewsWrapper}>
    <FlatList
      showsVerticalScrollIndicator={false}
      data={lastestNewsMock}
      renderItem={({ item: { title, imageURI } }) => (
        <HotNewsItem
          title={title}
          imageURI={imageURI}
          height={80}
          width={100}
          resizeMode="contain"
        />
      )}
      keyExtractor={(item) => item.title}
      ItemSeparatorComponent={Divider}
    />
  </BlankCard>
);

export default HotNews;
