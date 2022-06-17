import { SearchBar } from "@rneui/themed";
import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import { ListCards, VerticalImageCard } from "../../components";
import { colors } from "../../constants";

const ListEventsScreen: React.FC = () => {
  const platform = Platform.OS === "android" ? "android" : "ios";

  return (
    <View style={styles.listEventsContainer}>
      <View style={styles.searchBarView}>
        <SearchBar platform={platform} containerStyle={styles.searchBar} />
      </View>
      <View style={styles.listEventsView}>
        <ListCards
          renderCard={() => (
            <VerticalImageCard
              imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi68WX0wTuDQYxkQ_5ajf2GoCBbqaIeqlc-g&usqp=CAU"
              title="https: //encrypted-t bn0.gsta tic.com/im ages? q= tbn: ANd9GcQi6 8WX 0wTu DQYxkQ_5ajf2GoCBb qaIeqlc -g& usqp=CAU"
            />
          )}
        />
      </View>
    </View>
  );
};

export default ListEventsScreen;

const styles = StyleSheet.create({
  listEventsContainer: {
    flex: 1,
    backgroundColor: colors.white
  },
  searchBarView: {
    backgroundColor: colors.primary,
    padding: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  },
  searchBar: {
    paddingHorizontal: 8,
    marginBottom: 16,
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 2,
      height: 4
    },
    elevation: 4,
    borderRadius: 16
  },
  listEventsView: {
    flex: 1,
    paddingHorizontal: 8
  }
});
