import { Drawer } from 'expo-router/drawer';
import { Ionicons } from "@expo/vector-icons";

export default function Layout() {
  return (
    <Drawer
      screenOptions={{
        headerStyle: {
          backgroundColor: "#0d0d0d",
        },
        headerTintColor: "#00ffcc",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        drawerStyle: {
          backgroundColor: "#111",
          width: 240,
        },
        drawerActiveTintColor: "#00ffcc",
        drawerInactiveTintColor: "#888",
        drawerLabelStyle: {
          fontSize: 16,
          fontWeight: "bold",
        },
      }}
    >
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: "Inicio",
          title: "🎮 Gamer Home",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="game-controller-outline" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="form"
        options={{
          drawerLabel: "Login",
          title: "⚡ Entrar",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="log-in-outline" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="tabs"
        options={{
          drawerLabel: "Missões",
          title: "🔥 Aulas",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="rocket-outline" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="stack"
        options={{
          drawerLabel: "Downloads",
          title: "⬇ Arquivos",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="cloud-download-outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  );
}