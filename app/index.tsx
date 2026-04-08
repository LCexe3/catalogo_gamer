import Botao from '@/compenents/Botao'
import { Link, useRouter } from 'expo-router'
import { Text, View } from 'react-native'
import { Ionicons } from "@expo/vector-icons";

export default function Index() {
  const router = useRouter()

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0d0d0d",
        padding: 20
      }}
    >
      <Ionicons
        name="game-controller"
        size={180}
        color="#00ffcc"
      />

      <Text
        style={{
          fontSize: 24,
          color: "#fff",
          marginTop: 20,
          textAlign: "center"
        }}
      >
        Bem-vindo ao universo gamer
      </Text>

      <Text
        style={{
          fontSize: 34,
          fontWeight: "800",
          color: "#8a2be2",
          marginTop: 10,
          textAlign: "center",
          textShadowColor: "#8a2be2",
          textShadowOffset: { width: 0, height: 0 },
          textShadowRadius: 12
        }}
      >
        ⚡ START YOUR GAME ⚡
      </Text>

      <View style={{ marginTop: 30 }}>
        <Botao
          onPress={() => {
            router.push('/')
          }}
        >
          <Link
            href="/"
            style={{
              color: '#fff',
              fontWeight: 'bold',
              fontSize: 16
            }}
          >
            🎮 Entrar no jogo
          </Link>
        </Botao>
      </View>
    </View>
  );
}