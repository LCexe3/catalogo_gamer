import Botao from '@/compenents/Botao'
import styles from '@/constants/styles'
import { Text, View } from 'react-native'
import { Link, useRouter } from 'expo-router'
import { Ionicons } from "@expo/vector-icons";

export default function Index() {
    const router = useRouter()

    return (
        <View
            style={[
                styles.centralizado,
                {
                    gap: 20,
                    flex: 1,
                    backgroundColor: '#0d0d0d',
                    padding: 20
                }
            ]}
        >
            <Ionicons
                name="desktop-outline"
                size={180}
                color="#00ffcc"
            />

            <Text
                style={{
                    fontSize: 28,
                    fontWeight: '800',
                    color: '#8a2be2',
                    textAlign: 'center',
                    textShadowColor: '#8a2be2',
                    textShadowOffset: { width: 0, height: 0 },
                    textShadowRadius: 12
                }}
            >
                🎮 GAMER CONTENT HUB
            </Text>

            <Text
                style={{
                    color: '#fff',
                    fontSize: 16,
                    textAlign: 'center'
                }}
            >
                Acesse seus materiais e recursos digitais ⚡
            </Text>

            <Botao
                onPress={() => {
                    router.push('/stack/download')
                }}
            >
                <Link
                    href="/stack/download"
                    style={{
                        fontSize: 18,
                        color: '#fff',
                        fontWeight: 'bold'
                    }}
                >
                    ⬇ Ir para Downloads
                </Link>
            </Botao>

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
                    🎮 Voltar
                </Link>
            </Botao>
        </View>
    )
}