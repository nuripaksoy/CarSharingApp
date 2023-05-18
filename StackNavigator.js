import { createStackNavigator } from '@react-navigation/stack';
import MyTabs from './MyTabs';
import Home from './screens/Home';
import Login from './screens/Login';

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LoginStackNavigator" component={Login} />
      <Stack.Screen name="HomeStackNavigator"  component={MyTabs} options={{headerShown: false , gestureEnabled: false}}/>
    </Stack.Navigator>
  );
}

export default StackNavigator