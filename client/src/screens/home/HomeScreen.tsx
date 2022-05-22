import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import auth from '@react-native-firebase/auth';

const HomeScreen = () => (
  <View>
    <Text>Home screen Test</Text>
    <TouchableOpacity
      onPress={() =>
        auth()
          .signOut()
          .then(() => console.log('User signed out!'))
      }>
      <Text>Sign out</Text>
    </TouchableOpacity>
  </View>
);

export default HomeScreen;
