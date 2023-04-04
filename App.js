import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/Home/Home';
import MySpace from './src/MySpace/MySpace';
import Settings from './src/Settings/Settings'
import MyTeam from './src/MyTeam/MyTeam';
import Ionicons from 'react-native-vector-icons/MaterialIcons';
import Ionicons2 from 'react-native-vector-icons/AntDesign';

export default function App() {
  const Tab = createBottomTabNavigator()
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={({ route }) => ({
          activeTintColor: '#f4833b',
          inactiveTintColor: '#627381',
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'MySpace') {
              return <Ionicons2 name="user" size={30} color={color} />;
            } else if (route.name === 'MyTeam') {
              iconName = focused ? 'groups' : 'groups';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings';
            }

            return <Ionicons name={iconName} size={30} color={color} />;
          },
        })}
      >

        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="MySpace" component={MySpace}
          options={{
            headerShown: false
          }}
        />
        <Tab.Screen name="MyTeam" component={MyTeam} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

