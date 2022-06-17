// libs
import { StyleSheet } from "react-native";
import { NEWS_ITEM_WIDTH } from "../../../../dataSources/LastestNews";

const styles = StyleSheet.create({
  lastestNewsItemWrapper: {
    width: NEWS_ITEM_WIDTH
  },
  titleNews: {
    marginTop: 5,
    fontSize: 18,
    fontWeight: "bold"
  },
  descriptionNews: {
    fontSize: 14,
    color: "gray"
  }
});

export default styles;
