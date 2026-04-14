import FontAwesome from '@expo/vector-icons/FontAwesome'
import { Tabs } from 'expo-router'
import styles from '@/constants/styles'

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: '#00ffcc',
        tabBarInactiveTintColor: '#666',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
      }}
    >
<Tabs.Screen
        name="minecraft"
        options={{
          title: 'Minecraft',
          tabBarIcon: ({ color }) => <FontAwesome size={26} name="cube" color={color} />,
        }}
      />

      <Tabs.Screen
        name="fortnite"
        options={{
          title: 'Fortnite',
          tabBarIcon: ({ color }) => <FontAwesome size={26} name="bolt" color={color} />,
        }}
      />

      <Tabs.Screen
        name="valorant"
        options={{
          title: 'Valorant',
          tabBarIcon: ({ color }) => <FontAwesome size={26} name="crosshairs" color={color} />,
        }}
      />

      <Tabs.Screen
        name="gta"
        options={{
          title: 'GTA V',
          tabBarIcon: ({ color }) => <FontAwesome size={26} name="car" color={color} />,
        }}
      />
    </Tabs>
  )
}