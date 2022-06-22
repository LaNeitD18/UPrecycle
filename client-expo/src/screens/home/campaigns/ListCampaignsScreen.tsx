import {
  faCalendarDays,
  faLocationDot
} from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";
import { Image, SearchBar } from "@rneui/themed";
import moment from "moment";
import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { CardInfoRow, ListCards } from "../../../components";
import { colors, sizes } from "../../../constants";
import { useAppSelector } from "../../../hooks/reduxHooks";
import { MainScreensProp } from "../../../navigation/MainNavigator";

const ListCampaignsScreen: React.FC = () => {
  const navigation = useNavigation<MainScreensProp>();

  const platform = Platform.OS === "android" ? "android" : "ios";
  const campaigns = useAppSelector((state) => state.campaigns);

  const goToDetail = (item: any) => navigation.navigate("HomeNavigator", {
    screen: "CampaignDetail",
    params: { item }
  });

  const renderCampaignCard = ({ item }: { item: any }) => {
    const formattedDate = moment(item?.date).format("L");

    return (
      <TouchableOpacity
        style={styles.verticalImageCardContainer}
        onPress={() => goToDetail(item)}
      >
        <Image source={{ uri: item.imageUrl }} style={styles.campaignImage} />
        <View style={styles.contentView}>
          <Text style={styles.campaignTitle} numberOfLines={2}>
            {item.title}
          </Text>
          <CardInfoRow content={item.address} icon={faLocationDot} />
          <CardInfoRow content={formattedDate} icon={faCalendarDays} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.listCampaignsContainer}>
      <View style={styles.searchBarView}>
        <SearchBar platform={platform} containerStyle={styles.searchBar} />
      </View>
      <View style={styles.listCampaignsView}>
        <ListCards
          items={campaigns.campaigns}
          renderCard={renderCampaignCard}
        />
      </View>
    </View>
  );
};

export default ListCampaignsScreen;

const styles = StyleSheet.create({
  listCampaignsContainer: {
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
  listCampaignsView: {
    flex: 1,
    paddingHorizontal: 8
  },
  verticalImageCardContainer: {
    flexDirection: "row",
    height: sizes.height * 0.15,
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 2,
      height: 2
    },
    elevation: 4,
    backgroundColor: colors.white,
    margin: 8
  },
  campaignImage: {
    width: sizes.width * 0.25,
    borderRadius: 16
  },
  contentView: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexShrink: 1
  },
  campaignTitle: {
    flex: 1,
    fontSize: sizes.h3,
    fontWeight: "600"
  }
});
