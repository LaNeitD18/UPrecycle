// libs
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  hotNewsItemWrapper: {
    flex: 1,
    flexDirection: "row"
  },
  hotNewsItemWrapperInner: {
    flexDirection: "column",
    marginLeft: 10
  },
  titleNews: {
    fontSize: 18,
    fontWeight: "bold"
  },
  descriptionNews: {
    fontSize: 14,
    marginTop: 5,
    color: "gray"
  }
});

export default styles;
