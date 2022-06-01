import React, { useEffect, useState } from "react";
import auth from "@react-native-firebase/auth";
import AuthenticationNavigator from "./src/navigation/AuthenticationNavigator";
import MainNavigator from "./src/navigation/MainNavigator";

const App = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  // eslint-disable-next-line no-shadow
  function onAuthStateChanged(user: any) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (user) {
    return <MainNavigator />;
  }
  return <AuthenticationNavigator />;
};

export default App;
