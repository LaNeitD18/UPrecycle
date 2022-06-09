import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { fetchUser } from "../../redux/reducers/userSlice";

const HomeScreen = () => {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      dispatch(fetchUser("6294755d3f27cf5d1cd98777"));
      console.log("user", user);
    } catch (error) {
      console.log("err", error);
    }
  };

  return (
    <View>
      <Text>{user.email}</Text>
    </View>
  );
};

export default HomeScreen;
