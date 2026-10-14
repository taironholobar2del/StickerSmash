import { Tabs } from 'expo-router';
import { Text } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: '#25292e' },
        headerTintColor: '#ffffff',
        tabBarStyle: { backgroundColor: '#25292e' },
        tabBarActiveTintColor: '#ffd33d',
        tabBarInactiveTintColor: '#aaaaaa',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Domov',
          tabBarIcon: ({ color }) => (
            <Text style={{ color, fontSize: 24 }}>⌂</Text>
          ),
        }}
      />
      <Tabs.Screen
        name="hobiji"
        options={{
          title: 'Moji hobiji',
          tabBarIcon: ({ color }) => (
            <Text style={{ color, fontSize: 22 }}>★</Text>
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'O meni',
          tabBarIcon: ({ color }) => (
            <Text style={{ color, fontSize: 23 }}>●</Text>
          ),
        }}
      />
    </Tabs>
  );
}