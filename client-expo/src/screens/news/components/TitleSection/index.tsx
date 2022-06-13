import React from "react";
import { Text } from "react-native";

interface TitleProps {
  title: string;
}

const TitleSection = ({ title }: TitleProps) => <Text>{title}</Text>;

export default TitleSection;
