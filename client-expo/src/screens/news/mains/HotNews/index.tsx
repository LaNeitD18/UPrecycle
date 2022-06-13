// libs
import React from "react";
import { Text } from "react-native";
import BlankCard from "../../../../components/BlankCard";
// components

interface TitleProps {
  title: string;
}

const HotNews = ({ title }: TitleProps) => (
  <BlankCard headingTitle={title}>
    <Text>Thy</Text>
  </BlankCard>
);

export default HotNews;
