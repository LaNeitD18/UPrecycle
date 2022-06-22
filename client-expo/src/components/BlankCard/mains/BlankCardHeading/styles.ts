// libs
import { StyleSheet } from "react-native";
//
import { colors } from "../../../../constants/index";

const styles = StyleSheet.create({
  blankCardHeadingWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
  },
  headingTitle: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: colors.primary
  }
});

export default styles;
