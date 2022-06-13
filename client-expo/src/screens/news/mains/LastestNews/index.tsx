// libs
import React from "react";
import { Text } from "react-native";
// components
import BlankCard from "../../../../components/BlankCard";
// others
import styles from "./styles";

interface TitleProps {
  title: string;
}

const LastestNews = ({ title }: TitleProps) => (
  <BlankCard cardStyle={styles.lastestNewsWrapper} headingTitle={title}>
    <Text>Thy</Text>
  </BlankCard>
);

export default LastestNews;
