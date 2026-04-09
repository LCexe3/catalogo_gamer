import Botao from '@/components/Botao'
import styles from '@/constants/styles'
import { Ionicons } from "@expo/vector-icons"
import { Link, useRouter } from 'expo-router'
import { Text, View } from 'react-native'

export default function Nova() {
    const router = useRouter()

    return (
        <View style={[styles.centralizado, styles.gap20]}>
            <Ionicons name="cloud-download" size={180} color="#00ffcc" />

            <Text style={styles.tituloGrande}>
                ⚡ DOWNLOAD CENTER
            </Text>

            <Text style={styles.texto}>
                Seus arquivos gamer estão aqui 🎮
            </Text>

            <Botao onPress={() => router.push('/')}>
                <Link href="/" style={styles.link}>
                    🎮 Voltar ao menu
                </Link>
            </Botao>
        </View>
    )
}