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
    fontWeight: "bold",
    paddingRight: 40
  },
  descriptionNews: {
    fontSize: 14,
    color: "gray",
    paddingRight: 40
  }
});

export default styles;
