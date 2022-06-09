import React from "react";
import { getAuth } from "firebase/auth";
import { Provider } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";

import AuthenticationNavigator from "./src/navigation/AuthenticationNavigator";
import MainNavigator from "./src/navigation/MainNavigator";
import store from "./src/redux/store";
import { firebaseApp } from "./src/api/firebase";

const auth = getAuth(firebaseApp);

const App = () => {
  // // Set an initializing state whilst Firebase connects
  // const [initializing, setInitializing] = useState(true);
  // const [user, setUser] = useState();

  // // Handle user state changes
  // // eslint-disable-next-line no-shadow
  // function onAuthStateChanged(user: any) {
  //   setUser(user);
  //   if (initializing) setInitializing(false);
  // }

  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber; // unsubscribe on unmount
  // }, []);

  const [user] = useAuthState(auth);

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
