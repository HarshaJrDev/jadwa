import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import Home from '../screens/Home'

const Tab = createBottomTabNavigator();


const SettingsScreen = () => (
  <View style={styles.screen}>
    <Text>Settings Screen</Text>
  </View>
);

const App = () => {
  return (
    <>
  <Tab.Navigator
  screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'Home') {
        iconName = (
          <View style={{ alignItems: 'center' }}>
            <Feather name="home" size={size} color={focused ? "#6C5DD3" : "#6C5DD3"} />
            {focused && (
              <View
                style={{
                    borderRadius:5,
                  height: 7,
                  width: 40, // Width of the active border
                  backgroundColor: '#6C5DD3', // Change to your preferred color
                  marginTop: 4,
                }}
              />
            )}
          </View>
        );
      } else if (route.name === 'Settings') {
        iconName = (
          <View style={{ alignItems: 'center' }}>
            <Feather name="settings" size={size} color={focused ? "#6C5DD3" : "#6C5DD3"} />
            {focused && (
              <View
                style={{
                    borderRadius:5,
                  height: 7,
                  width: 40, // Width of the active border
                  backgroundColor: '#6C5DD3', // Change to your preferred color
                  marginTop: 4,
                }}
              />
            )}
          </View>
        );
      }

      return iconName; // Return the icon component directly
    },
    tabBarLabel: () => null, // Remove tab labels
    tabBarStyle: {
      position: 'absolute',
      elevation: 0,
      borderRadius: 15,
      height: 80,
    },
    tabBarItemStyle: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  })}
>
  <Tab.Screen name="Home" component={Home}  options={{headerShown:false}} />
  <Tab.Screen name="Settings" component={SettingsScreen} options={{headerShown:false}} />
</Tab.Navigator>

    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
