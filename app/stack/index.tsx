import Botao from '@/components/Botao'
import styles from '@/constants/styles'
import { Ionicons } from "@expo/vector-icons"
import { Link, useRouter } from 'expo-router'
import { Text, View } from 'react-native'

export default function Index() {
    const router = useRouter()

    return (
        <View style={[styles.centralizado, styles.gap20]}>
            <Ionicons name="desktop-outline" size={180} color="#00ffcc" />

            <Text style={styles.tituloGrande}>
                🎮 GAMER CONTENT HUB
            </Text>

            <Text style={styles.texto}>
                Acesse seus materiais e recursos digitais ⚡
            </Text>

            <Botao onPress={() => router.push('/stack/download')}>
                <Link href="/stack/download" style={styles.link}>
                    ⬇ Ir para Downloads
                </Link>
            </Botao>

            <Botao onPress={() => router.push('/')}>
                <Link href="/" style={styles.link}>
                    🎮 Voltar
                </Link>
            </Botao>
        </View>
    )
}