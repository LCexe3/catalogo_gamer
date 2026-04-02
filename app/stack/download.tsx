import Botao from '@/compenents/Botao'
import styles from '@/constants/styles'
import { Link, useRouter } from 'expo-router'
import { Text, View } from 'react-native'
import { Ionicons } from "@expo/vector-icons";

export default function Nova() {
    const router = useRouter()
    return (
        <View style={[styles.centralizado, { gap: 10 }]}>
            <Ionicons name="arrow-down" size={200} color="rgb(42, 112, 218)"/>
            <Text>Downloads</Text>
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