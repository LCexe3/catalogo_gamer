import Botao from '@/compenents/Botao'
import styles from '@/constants/styles'
import { Link, useRouter } from 'expo-router'
import { Text, View } from 'react-native'
import { Ionicons } from "@expo/vector-icons";

export default function Nova() {
    const router = useRouter()

    return (
        <View
            style={[
                styles.centralizado,
                {
                    gap: 20,
                    flex: 1,
                    backgroundColor: '#0d0d0d'
                }
            ]}
        >
            <Ionicons
                name="cloud-download"
                size={180}
                color="#00ffcc"
            />

            <Text
                style={{
                    fontSize: 28,
                    fontWeight: '800',
                    color: '#8a2be2',
                    textShadowColor: '#8a2be2',
                    textShadowOffset: { width: 0, height: 0 },
                    textShadowRadius: 10
                }}
            >
                ⚡ DOWNLOAD CENTER
            </Text>

            <Text
                style={{
                    color: '#fff',
                    fontSize: 16
                }}
            >
                Seus arquivos gamer estão aqui 🎮
            </Text>

            <Botao
                onPress={() => {
                    router.push('/')
                }}
            >
                <Link
                    href="/"
                    style={{
                        color: '#fff',
                        fontWeight: 'bold'
                    }}
                >
                    🎮 Voltar ao menu
                </Link>
            </Botao>
        </View>
    )
}