import { Button, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

function Login(){
    const navigation = useNavigation();

    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Login!</Text>
        <Button title="Go to Home" onPress={() =>navigation.navigate('HomeStackNavigator')} />
      </View>
    )
}

export default Login