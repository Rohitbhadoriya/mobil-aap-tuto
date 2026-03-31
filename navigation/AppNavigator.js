// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomeScreen from '../Screens/HomeScreen';
// import DetailsScreen from '../Screens/DetailsScreen';
// import FavoritesScreen from '../Screens/FavoritesScreen';

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

// const HomeStack = () => (
//   <Stack.Navigator>
//     <Stack.Screen 
//       name="Home" 
//       component={HomeScreen} 
//       options={{ title: 'Property Finder' }} 
//     />
//     <Stack.Screen 
//       name="Details" 
//       component={DetailsScreen} 
//       options={{ title: 'Property Details' }} 
//     />
//   </Stack.Navigator>
// );

// const AppNavigator = () => (
//   <NavigationContainer>
//     <Tab.Navigator>
//       <Tab.Screen 
//         name="HomeTab" 
//         component={HomeStack} 
//         options={{ headerShown: false, title: 'Home' }} 
//       />
//       <Tab.Screen name="Favorites" component={FavoritesScreen} />
//     </Tab.Navigator>
//   </NavigationContainer>
// );

// export default AppNavigator;