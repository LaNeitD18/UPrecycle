// libs
import { View } from "react-native";
// component
import BlankCardHeading from "./mains/BlankCardHeading";
// others
import styles from "./styles";

interface IBlankCardProps {
  // eslint-disable-next-line no-undef
  children?: JSX.Element;
  cardStyle?: Object;
  iconName?: string;
  headingTitle?: string;
}

const BlankCard = ({
  children,
  cardStyle,
  iconName,
  headingTitle
}: IBlankCardProps) => (
  <View style={[styles.blankCardWrapper, cardStyle]}>
    {headingTitle && <BlankCardHeading {...{ iconName, headingTitle }} />}
    {children}
  </View>
);

export default BlankCard;
