import {
  faCalendarDays,
  faLocationDot,
  faTemperature3,
  faWind
} from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";
import { Card, Divider, Image } from "@rneui/themed";
import { getAuth } from "firebase/auth";
import React, { useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import moment from "moment";

import UPrecycleText from "../../assets/i18n/vn";
import { CardInfoRow, ListCards } from "../../components";
import { colors, sizes } from "../../constants";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { MainScreensProp } from "../../navigation/MainNavigator";
import { fetchListCampaigns } from "../../redux/reducers/campaignSlice";
import { fetchUser } from "../../redux/reducers/userSlice";
import HomeHeader from "./components/HomeHeader";
import WeatherInfo from "./components/WeatherInfo";
import { mockTrashTypes, TrashType } from "../../models/TrashType";

const auth = getAuth();

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<MainScreensProp>();
  const dispatch = useAppDispatch();

  const uid = auth.currentUser?.uid || "";

  const campaigns = useAppSelector((state) => state.campaigns);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      dispatch(fetchUser(uid));
      dispatch(fetchListCampaigns());
    } catch (error) {
      console.log("err", error);
    }
  };

  const goToDetail = (item: any) => navigation.navigate("HomeNavigator", {
    screen: "CampaignDetail",
    params: { item }
  });

  const renderCampaignCard = ({ item }: { item: any }) => {
    const formattedDate = moment(item.date).format("L");

    return (
      <Card containerStyle={styles.campaignCardContainer}>
        <TouchableOpacity onPress={() => goToDetail(item)}>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={{
              uri: item.imageUrl
            }}
          />
          <View style={styles.campaignCardInfoView}>
            <Card.Title style={styles.campaignCardTitle} numberOfLines={1}>
              {item.title}
            </Card.Title>
            <View>
              <CardInfoRow content={item.address} icon={faLocationDot} />
              <CardInfoRow content={formattedDate} icon={faCalendarDays} />
            </View>
          </View>
        </TouchableOpacity>
      </Card>
    );
  };

  const renderTrashTypeCard = ({ item }: { item: TrashType }) => {
    let cardColor;

    switch (item.type) {
      case "Recyclable":
        cardColor = colors.blue;
        break;
      case "Organic":
        cardColor = colors.primary;
        break;
      default:
        cardColor = colors.secondary;
        break;
    }

    return (
      <TouchableOpacity
        style={[styles.trashTypeCardContainer, { backgroundColor: cardColor }]}
        onPress={() => navigation.navigate("HomeNavigator", {
          screen: "TrashTypeDetail",
          params: { item }
        })}
      >
        <Text style={styles.trashTypeCardLabel}>{item.label}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.homeScreenContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HomeHeader />
        <View style={styles.weatherRow}>
          <WeatherInfo
            title={UPrecycleText.AIR_QUALITY}
            icon={faWind}
            value="40*"
          />
          <Divider width={12} orientation="vertical" color={colors.white} />
          <WeatherInfo
            title={UPrecycleText.TEMPERATURE}
            icon={faTemperature3}
            value="33°C"
          />
        </View>
        <ListCards
          items={campaigns.campaigns}
          horizontal
          title={UPrecycleText.CAMPAIGN}
          renderCard={renderCampaignCard}
          goToList={() => navigation.navigate("HomeNavigator", {
            screen: "ListCampaigns"
          })}
        />
        <ListCards
          items={mockTrashTypes}
          horizontal
          title="Thông tin"
          renderCard={renderTrashTypeCard}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeScreenContainer: {
    flex: 1,
    paddingHorizontal: 12,
    paddingTop: 12,
    backgroundColor: colors.white
  },
  weatherRow: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 8
  },
  campaignCardContainer: {
    borderRadius: 8,
    padding: 0,
    marginHorizontal: 8,
    marginBottom: 8,
    width: sizes.width * 0.75,
    height: sizes.height * 0.25,
    shadowOpacity: 0.2,
    elevation: 4
  },
  campaignCardInfoView: {
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
  campaignCardTitle: {
    fontSize: sizes.h3,
    fontWeight: "bold"
  },
  trashTypeCardContainer: {
    height: sizes.height * 0.2,
    width: 100,
    borderRadius: 16,
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
    marginBottom: 8,
    marginHorizontal: 12,
    shadowOpacity: 0.2,
    elevation: 4,
    backgroundColor: "pink"
  },
  trashTypeCardLabel: {
    fontSize: sizes.h3,
    fontWeight: "600",
    color: colors.white,
    textAlign: "center",
    lineHeight: 32
  }
});
