import { getAuth } from "firebase/auth";
import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { fetchUser } from "../../redux/reducers/userSlice";

const auth = getAuth();

const HomeScreen = () => {
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.user);
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
    <View>
      <Text>{user.email}</Text>
    </View>
  );
};

export default HomeScreen;
