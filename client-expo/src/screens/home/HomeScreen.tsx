import { faTemperature3, faWind } from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";
import { Divider } from "@rneui/themed";
import { getAuth } from "firebase/auth";
import React, { useEffect } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ListCards } from "../../components";

import { colors } from "../../constants";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { MainScreensProp } from "../../navigation/MainNavigator";
import { fetchUser } from "../../redux/reducers/userSlice";
import HomeHeader from "./components/HomeHeader";
import WeatherInfo from "./components/WeatherInfo";

const auth = getAuth();

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<MainScreensProp>();
  const dispatch = useAppDispatch();

  const uid = auth.currentUser?.uid || "";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      dispatch(fetchUser(uid));
    } catch (error) {
      console.log("err", error);
    }
  };

  return (
    <SafeAreaView style={styles.homeScreenContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HomeHeader />
        <View style={styles.weatherRow}>
          <WeatherInfo title="Chất lượng không khí" icon={faWind} value="40*" />
          <Divider width={12} orientation="vertical" color={colors.white} />
          <WeatherInfo title="Nhiệt độ" icon={faTemperature3} value="30°C" />
        </View>
        <ListCards
          title="Sự kiện"
          goToDetail={(item) => navigation.navigate("HomeNavigator", {
            screen: "EventDetail",
            params: { item }
          })}
        />
        {/* <ListCards title="Thông tin" /> */}
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
  }
});
