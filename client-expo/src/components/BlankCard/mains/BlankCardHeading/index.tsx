// libs
import { View, Text } from "react-native";
// components
// import MatIcon from "@/components/MatIcon";
// others
import styles from "./styles";

interface IHeadingProps {
  headingTitle: string;
}

const BlankCardHeading = ({ headingTitle }: IHeadingProps) => (
  <View style={styles.blankCardHeadingWrapper}>
    {/* <MatIcon name={iconName} size={25} color={AZURE_RADIANCE} /> */}
    <Text style={styles.headingTitle}>{headingTitle}</Text>
  </View>
);

export default BlankCardHeading;
