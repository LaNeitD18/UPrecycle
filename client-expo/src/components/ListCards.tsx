import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Text } from "@rneui/themed";
import React from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";

import { colors, sizes } from "../constants";

const events = [
  {
    id: 1,
    title: "Event 1",
    address: "1/2 XVNT blabla",
    date: "10/2/2022",
    uri: "https://www.facebook.com/ACCB2030/posts/577593737120613"
  },
  {
    id: 2,
    title: "event 2",
    address: "100/78 XVNT P21 Binh Thanh",
    date: "22/10/2022",
    uri: "https://www.facebook.com/ACCB2030/posts/577593737120613"
  },
  {
    id: 3,
    title: "event 3",
    address: "100/78 XVNT P21 Binh Thanh",
    date: "22/10/2022",
    uri: "https://www.facebook.com/ACCB2030/posts/577593737120613"
  },
  {
    id: 4,
    title: "event 4",
    address: "100/78 XVNT P21 Binh Thanh",
    date: "22/10/2022",
    uri: "https://www.facebook.com/ACCB2030/posts/577593737120613"
  },
  {
    id: 5,
    title: "event 5",
    address: "100/78 XVNT P21 Binh Thanh",
    date: "22/10/2022",
    uri: "https://www.facebook.com/ACCB2030/posts/577593737120613"
  },
  {
    id: 6,
    title: "event 6",
    address: "100/78 XVNT P21 Binh Thanh",
    date: "22/10/2022",
    uri: "https://www.facebook.com/ACCB2030/posts/577593737120613"
  }
];

interface CardInfoRowProps {
  icon: IconDefinition;
  content: string;
}

interface ListCardsProps {
  title?: string;
  horizontal?: boolean;
  renderCard: (item: any) => React.ReactElement;
  goToList?: () => void;
}

export const CardInfoRow: React.FC<CardInfoRowProps> = ({ icon, content }) => (
  <View style={styles.cardInfoRow}>
    <FontAwesomeIcon icon={icon} color={colors.primary} />
    <Text style={styles.infoRowContent}>{content}</Text>
  </View>
);

const ListCards: React.FC<ListCardsProps> = ({
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
      data={events}
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
    marginVertical: 16
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
    fontSize: sizes.base,
    marginLeft: 8
  }
});
