import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
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
        <Stack.Screen name="moviesList" component={MovieList} options={{title: "MovieTime"}}/>
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
            const { movieId, type } = route.params;
            return [`item.${movieId}.photo.${type}`]
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
