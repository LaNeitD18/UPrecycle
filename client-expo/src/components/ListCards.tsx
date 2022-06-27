import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Text } from "@rneui/themed";
import React from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";

import { colors, sizes } from "../constants";

interface CardInfoRowProps {
  icon: IconDefinition;
  content: string;
}

interface ListCardsProps {
  items: any[];
  title?: string;
  horizontal?: boolean;
  renderCard: (item: any) => React.ReactElement;
  goToList?: () => void;
}

export const CardInfoRow: React.FC<CardInfoRowProps> = ({ icon, content }) => (
  <View style={styles.cardInfoRow}>
    <FontAwesomeIcon icon={icon} color={colors.primary} />
    <Text style={styles.infoRowContent} numberOfLines={1}>
      {content}
    </Text>
  </View>
);

const ListCards: React.FC<ListCardsProps> = ({
  items = [],
  title = "",
  horizontal = false,
  renderCard,
  goToList
}) => (
  <View style={styles.listCardsContainer}>
    {title?.length !== 0 && (
      <View style={styles.listCardsTitleRow}>
        <Text style={styles.listCardsTitle}>{title}</Text>
        <TouchableOpacity onPress={goToList}>
          <FontAwesomeIcon icon={faAngleRight} size={20} />
        </TouchableOpacity>
      </View>
    )}
    <FlatList
      horizontal={horizontal}
      data={items}
      renderItem={renderCard}
      style={styles.flatList}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      // keyExtractor={(item) => item.id}
    />
  </View>
);

export default ListCards;

const styles = StyleSheet.create({
  listCardsContainer: {
    marginVertical: 12
  },
  listCardsTitleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  listCardsTitle: {
    fontSize: sizes.h2,
    fontWeight: "bold"
  },
  flatList: {
    flexGrow: 0
  },
  cardInfoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8
  },
  infoRowContent: {
    flex: 1,
    fontSize: sizes.base,
    marginLeft: 8
  }
});
