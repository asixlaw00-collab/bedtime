import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { HomeScreen } from './src/screens/HomeScreen';
import { StoryListScreen } from './src/screens/StoryListScreen';
import { StoryReaderScreen } from './src/screens/StoryReaderScreen';
import { FavoritesScreen } from './src/screens/FavoritesScreen';
import { Colors } from './src/theme';
import { RootStackParamList } from './src/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const NAV_THEME = {
  ...DefaultTheme,
  colors: { ...DefaultTheme.colors, background: Colors.bg, card: Colors.bgCard, text: Colors.text, border: Colors.bgDeep },
};

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="StoryList" component={StoryListScreen} />
      <Stack.Screen name="Reader" component={StoryReaderScreen} options={{ presentation: 'card' }} />
    </Stack.Navigator>
  );
}

function FavStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
      <Stack.Screen name="Reader" component={StoryReaderScreen} />
      {/* StoryList needed by type but unused here */}
      <Stack.Screen name="StoryList" component={StoryListScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={NAV_THEME}>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: { backgroundColor: Colors.bgCard, borderTopColor: Colors.bgDeep, height: 72 },
            tabBarActiveTintColor: Colors.gold,
            tabBarInactiveTintColor: Colors.textMuted,
            tabBarLabelStyle: { fontSize: 13, fontWeight: '700', marginBottom: 6 },
          }}
        >
          <Tab.Screen
            name="HomeTab"
            component={HomeStack}
            options={{ tabBarLabel: 'Home', tabBarIcon: ({ color }) => <Text style={{ fontSize: 32, color }}>🏠</Text> }}
          />
          <Tab.Screen
            name="FavTab"
            component={FavStack}
            options={{ tabBarLabel: 'Favourites', tabBarIcon: ({ color }) => <Text style={{ fontSize: 32, color }}>♥</Text> }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
