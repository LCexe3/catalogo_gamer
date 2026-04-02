import Botao from '@/compenents/Botao'
import styles from '@/constants/styles'
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
      }}
    >
<Ionicons name="paw" size={200} color="rgb(42, 112, 218)"/>
      <Text style = {{fontSize: 20}}>Bem-vindo ao aplicativo do CastraPrev!</Text>
      <Text style = {{fontSize: 40,fontWeight:700}}>Evite a multiplicação!</Text>
                  <Botao onPress={() => {
                      router.push('/')
                  }}>
                      <Link href="/" style={{ color: '#fff' }}>
                          Clique aqui para evitar!
                      </Link>
                  </Botao>
    </View>
  );
}
