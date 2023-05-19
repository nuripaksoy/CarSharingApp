import * as React from 'react';
import MyTabs from './components/MyTabs';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import { SafeAreaView } from "react-native-safe-area-context";



export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <StackNavigator>
          <MyTabs />
        </StackNavigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}


