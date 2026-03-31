import Botao from '@/compenents/Botao'
import styles from '@/constants/styles'
import { Text, View } from 'react-native'
import { Link, useRouter } from 'expo-router'
import { Ionicons } from "@expo/vector-icons";

// função principal da tela
export default function Index() {
const router = useRouter()
    return (
      // buscar o estilo centralizado do arquivo styles.ts
        <View style={[styles.centralizado, { gap: 10 }]}>
            <Ionicons name="laptop" size={200} color="rgb(9, 32, 240)"/>
            <Text>Material Didático</Text>
            
            <Botao onPress={() => {
                router.push('/stack/download')
            }}>
                <Link href="/stack/download" style={{ color: '#fff' }}>
                    Ir para Downloads
                </Link>
            </Botao>
            <Botao onPress={() => {
                            router.push('/')
                        }}>
                            <Link href="/" style={{ color: '#fff' }}>
                                Voltar
                            </Link>
            </Botao>
            </View>
    )
}
