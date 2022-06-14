import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faAngleRight,
  faCalendarDays,
  faLocationDot
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Card, Image, Text } from "@rneui/themed";
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
  }
];

interface CardInfoRowProps {
  icon: IconDefinition;
  content: string;
}

interface ListCardsProps {
  title: string;
  goToDetail: (item: any) => void;
  goToList?: () => void;
}

export const CardInfoRow: React.FC<CardInfoRowProps> = ({ icon, content }) => (
  <View style={styles.cardInfoRow}>
    <FontAwesomeIcon icon={icon} color={colors.primary} />
    <Text style={styles.infoRowContent}>{content}</Text>
  </View>
);

const ListCards: React.FC<ListCardsProps> = ({
  title,
  goToDetail,
  goToList
}) => {
  const renderCard = ({ item }) => (
    <Card containerStyle={styles.cardContainer}>
      <TouchableOpacity onPress={() => goToDetail(item)}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi68WX0wTuDQYxkQ_5ajf2GoCBbqaIeqlc-g&usqp=CAU"
          }}
        />
        <View style={styles.cardInfoView}>
          <Card.Title style={styles.cardTitle}>{item.title}</Card.Title>
          <View>
            <CardInfoRow content={item.address} icon={faLocationDot} />
            <CardInfoRow content={item.date} icon={faCalendarDays} />
          </View>
        </View>
      </TouchableOpacity>
    </Card>
  );

  return (
    <View style={styles.listCardsContainer}>
      <View style={styles.listCardsTitleRow}>
        <Text style={styles.listCardsTitle}>{title}</Text>
        <TouchableOpacity onPress={goToList}>
          <FontAwesomeIcon icon={faAngleRight} size={20} />
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        data={events}
        renderItem={renderCard}
        style={styles.flatList}
        showsHorizontalScrollIndicator={false}
        // keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ListCards;

const styles = StyleSheet.create({
  listCardsContainer: {
    marginVertical: 20
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
    height: sizes.height * 0.28,
    flexGrow: 0
  },
  cardContainer: {
    borderRadius: 8,
    padding: 0,
    marginHorizontal: 8,
    width: sizes.width * 0.75,
    height: sizes.height * 0.25
  },
  cardInfoView: {
    padding: 8,
    marginTop: 8
  },
  image: {
    width: sizes.width * 0.75,
    height: 100,
    marginRight: 10,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  },
  cardTitle: {
    fontSize: sizes.h3,
    fontWeight: "bold"
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
