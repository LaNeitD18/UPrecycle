// libs
import React from "react";
import { FlatList } from "react-native";
// components
import BlankCard from "../../../../components/BlankCard";
import LastestNewsItem from "../../components/LastestNewsItem";
import ItemSeparator from "../../../../components/ItemSeparator";
// mocks
import lastestNewsMock from "../../../../mocks/LastestNews";

interface ILastestNewsProps {
  titleList: string;
}

const LastestNews = ({ titleList }: ILastestNewsProps) => (
  <BlankCard headingTitle={titleList} cardStyle={{ flex: 1 }}>
    <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal
      data={lastestNewsMock}
      keyExtractor={(item) => item.title}
      renderItem={({ item: { title, imageURI, uri } }) => (
        <LastestNewsItem title={title} imageURI={imageURI} uri={uri} />
      )}
      ItemSeparatorComponent={ItemSeparator}
    />
  </BlankCard>
);

export default LastestNews;
