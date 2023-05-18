import * as React from 'react';
import MyTabs from './MyTabs';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from "react-native";
import StackNavigator from './StackNavigator';


export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator>
        <MyTabs />
      </StackNavigator>
    </NavigationContainer>
  );
}


