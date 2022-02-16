import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LoginScreen from "./src/screens/login-screen.js"
import MainScreen from './src/screens/main-screen.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from './RootNavigation';
import DetailsScreen from './src/screens/details-screen.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      {/* ... */}
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='MainScreen' component={MainScreen} />
        <Stack.Screen name='LoginScreen' component={LoginScreen} />
        <Stack.Screen name='DetailsScreen' component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Login Screen"
        onPress={() => navigation.navigate('LoginScreen')}
      />
      <Button
        title="Go to Main Screen"
        onPress={() => navigation.navigate('MainScreen')}
      />
    </View>

  );
}

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "#D9F6E0",
//     flex: 1,
//     flexDirection: "column",
//     // justifyContent : 'center',
//     // paddingTop :  "35% ",
//     // alignItems : 'center',
//   },
//   oval: {
//     borderWidth: 1.5,
//     borderColor: "#003406",
//     backgroundColor: "#FF3214",
//     borderTopLeftRadius: 0,
//     borderTopRightRadius: 0,
//     borderBottomLeftRadius: 250,
//     borderBottomRightRadius: 250,
//     // justifyContent : 'center',
//     // paddingTop :  "35% ",
//     // alignItems : 'center',
//     width: 500,
//     height: 550,
//   }
// })