import Botao from '@/components/Botao'
import styles from '@/constants/styles'
import { Ionicons } from "@expo/vector-icons"
import { Link, useRouter } from 'expo-router'
import { Text, View } from 'react-native'

export default function Index() {
  const router = useRouter()

  return (
    <View style={styles.centralizado}>

      <Ionicons name="game-controller" size={180} color="#00ffcc" />

      <Text style={styles.texto}>
        Bem-vindo ao universo gamer
      </Text>

      <Text style={styles.tituloGrande}>
        ⚡ START YOUR GAME ⚡
      </Text>

      <View style={styles.marginTop30}>
        <Botao onPress={() => router.push('/')}>
          <Link href="/" style={styles.link}>
            🎮 Entrar no jogo
          </Link>
        </Botao>
      </View>
    </View>
  )
}