
// ------------------------------------
// This file for learning purposes only.
// ------------------------------------


import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LoginScreen from "./src/screens/login-screen.js"
import MainScreen from './src/screens/main-screen.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from './src/navigator/RootNavigation';
import DetailsScreen from './src/screens/details-screen.js';
import UsersScreen from './src/screens/users-screen.js';
import TodoScreen from './src/screens/todo-screen.js';
import ResetPassword from './src/screens/ResetPassword-screen.js';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

  // Stack is a navigation container that implements the react-navigation/native StackView.
const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

  // HomeScreen is the main screen of the app.
function HomeScreen({ navigation }) {
    // return the component
  return (
    <View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: "35%" }}>
        <Text style={{ fontSize: "25px", fontStyle: "bold" }} >Home Screen</Text>
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: "5%" }}>
        
          {/* // button for navigating to the Login screen */}
        <Button
          style={{ flex: 1, justifyContent: 'center' }}
          title="Go to Login Screen"
          onPress={() => navigation.navigate('LoginScreen')}
        />
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: "5%" }}>
        
          {/* // button for navigating to the Main screen */}
        <Button
          style={{ flex: 1, justifyContent: 'center', margin: "10px" }}
          title="Go to Main Screen"
          onPress={() => navigation.navigate('MainScreen')}
        />
      </View>
    </View>
  );
}


  // App() function is the main function of the app.
export default function App() {
  return (
      // NavigationContainer is a component that manages the navigation state for the app.
    <NavigationContainer ref={navigationRef}>

        {/* Stack.Navigator is a component that implements the react-navigation/native StackView. */}
      <Stack.Navigator>

          {/* // register screens for the app with Stack.Screen */}
        <Stack.Screen name='LoginScreen' component={LoginScreen} />

        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='MainScreen' component={MainScreen} />
        <Stack.Screen name='DetailsScreen' component={DetailsScreen} />
        <Stack.Screen name='UsersScreen' component={UsersScreen} />
        <Stack.Screen name='TodoScreen' component={TodoScreen} />
        <Stack.Screen name='ResetPassword' component={ResetPassword} />

      </Stack.Navigator>
    </NavigationContainer>
  );


}

