import React, { useEffect, useState } from 'react';
import AuthenticationNavigator from './src/navigation/AuthenticationNavigator';
import MainNavigator from './src/navigation/MainNavigator';

import auth from '@react-native-firebase/auth';

const App = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user: any) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if(user) {
    return <MainNavigator></MainNavigator>;
  }
  return <AuthenticationNavigator></AuthenticationNavigator>;
};

export default App;
