// libs
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  hotNewsItemWrapper: {
    flexDirection: "row"
  },
  hotNewsItemWrapperInner: {
    flex: 1,
    marginLeft: 10
  },
  titleNews: {
    fontSize: 18,
    fontWeight: "bold"
  },
  descriptionNews: {
    fontSize: 14,
    color: "gray"
  }
});

export default styles;
