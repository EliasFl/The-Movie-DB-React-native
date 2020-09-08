import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MovieDetail from './src/screens/MovieDetail';
import MovieList from './src/screens/MovieList';
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

export default function AppContainer() {
  return (
    <App />
  );
}

const Stack = createSharedElementStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="moviesList" component={MovieList} />
        <Stack.Screen 
          name="movieDetail" 
          component={MovieDetail} 
          options={{
            headerTransparent: true,
            headerBackTitleVisible: false,
            headerTintColor: '#fff',
            headerTitle: () => null,
            headerStatusBarHeight: 30
          }}
          sharedElements={(route, otherRoute, showing) => {
            const { movieId } = route.params;
            return [`item.${movieId}.photo`]
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
