// libs
import React from "react";
import { FlatList } from "react-native";
// components
import BlankCard from "../../../../components/BlankCard";
import LastestNewsItem from "../../components/LastestNewsItem";
import ItemSeparator from "../../../../components/ItemSeparator";
// mocks
import lastestNewsMock from "../../../../mocks/LastestNews";
// others
import styles from "./styles";

interface ILastestNewsProps {
  titleList: string;
}

const LastestNews = ({ titleList }: ILastestNewsProps) => (
  <BlankCard cardStyle={styles.lastestNewsWrapper} headingTitle={titleList}>
    <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal
      data={lastestNewsMock}
      keyExtractor={(item) => item.title}
      renderItem={({ item: { title, imageURI } }) => (
        <LastestNewsItem
          title={title}
          imageURI={imageURI}
          height={200}
          width={300}
          resizeMode="contain"
        />
      )}
      ItemSeparatorComponent={ItemSeparator}
    />
  </BlankCard>
);

export default LastestNews;
