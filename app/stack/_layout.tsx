// impostando o Stack nativo do expo-router - ROTAS
import { Stack } from 'expo-router'
// Função principal do layout
export default function Layout() {
    return (
    // retirando a visualização do cabeçalho  
    <Stack screenOptions={{ headerShown: false }}>
   
    <Stack.Screen name='index'
            options={{ title: 'Inicial' }} />
    </Stack>
    )
}