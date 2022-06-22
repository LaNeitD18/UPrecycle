import React from "react";
import { getAuth } from "firebase/auth";
import { Provider } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";

import AuthenticationNavigator from "./src/navigation/AuthenticationNavigator";
import MainNavigator from "./src/navigation/MainNavigator";
import store from "./src/redux/store";
import { firebaseApp } from "./src/api/firebase";
import { LoadingScreen } from "./src/screens";

const auth = getAuth(firebaseApp);

const App = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) return <LoadingScreen />;

  if (user) {
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
  return <AuthenticationNavigator />;
};

export default App;
