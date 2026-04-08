import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#111',
          borderTopWidth: 0,
          height: 70,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarActiveTintColor: '#00ffcc',
        tabBarInactiveTintColor: '#666',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={26} name="gamepad" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="config"
        options={{
          title: 'Config',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={26} name="cog" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="cursos"
        options={{
          title: 'Missões',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={26} name="rocket" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="opcoes"
        options={{
          title: 'Menu',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={26} name="list" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}