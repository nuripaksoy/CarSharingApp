import * as React from 'react';
import MyTabs from './components/MyTabs';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from 'react-native'



export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor="#bb5050" />
      <NavigationContainer >
        <StackNavigator>
          <MyTabs />
        </StackNavigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}


