import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LoginScreen from "./src/screens/login-screen.js"
import MainScreen from './src/screens/main-screen.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from './src/navigator/RootNavigation';
import DetailsScreen from './src/screens/details-screen.js';
import UsersScreen from './src/screens/users-screen.js';
import TodoScreen from './src/screens/todo-screen.js';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();


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



export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen name='LoginScreen' component={LoginScreen} />

        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='MainScreen' component={MainScreen} />
        <Stack.Screen name='DetailsScreen' component={DetailsScreen} />
        <Stack.Screen name='UsersScreen' component={UsersScreen} />
        <Stack.Screen name='TodoScreen' component={TodoScreen} />
      </Stack.Navigator>


    </NavigationContainer>
  );


}

