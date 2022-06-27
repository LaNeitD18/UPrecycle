// libs
import React from "react";
import { FlatList, ScrollView } from "react-native";
// components
import BlankCard from "../../../../components/BlankCard";
import HotNewsItem from "../../components/HotNewsItem";
import Divider from "../../../../components/Divider";
// mocks
import hotNewsMock from "../../../../mocks/HotNews";
import styles from "./styles";

interface TitleProps {
  titleList: string;
}

const HotNews = ({ titleList }: TitleProps) => (
  <BlankCard headingTitle={titleList} cardStyle={styles.hotNewsWrapper}>
    <ScrollView
      scrollEnabled={false}
      showsHorizontalScrollIndicator={false}
      horizontal
    >
      <FlatList
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        data={hotNewsMock}
        renderItem={({ item: { title, imageURI, uri } }) => (
          <HotNewsItem title={title} imageURI={imageURI} uri={uri} />
        )}
        keyExtractor={(item) => item.title}
        ItemSeparatorComponent={Divider}
      />
    </ScrollView>
  </BlankCard>
);

export default HotNews;
