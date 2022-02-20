

// this file for learning purposes only.


/* import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from '../screens/main-screen';
import DetailsScreen from '../screens/details-screen';
import UsersScreen from '../screens/users-screen';
import TodoScreen from '../screens/todo-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
// Create Bottom Tab Navigator
const Tab = createBottomTabNavigator();

//Screen names
const homeName = "MainScreen";
const todoName = "TodoScreen";
const userName = "UsersScreen";


// Create Custom Tab Navigator
const Tabs = () => {

  return (
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === userName) {
              iconName = focused ? 'person' : 'person-outline';

            } else if (rn === todoName) {
              iconName = focused ? 'list' : 'list-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarInactiveTintColor: 'grey',
        })}>

        <Tab.Screen name={homeName} component={MainScreen} />
        <Tab.Screen name={todoName} component={TodoScreen} />
        <Tab.Screen name={userName} component={UsersScreen} />
        
      </Tab.Navigator>
  );
}

export default Tabs; */