import { Stack } from 'expo-router'

export default function Layout() {
    return (
        <Stack
            screenOptions={{
                headerShown: false,
                headerStyle: { backgroundColor: '#0d0d0d' },
                headerTintColor: '#00ffcc',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 20,
                },
                contentStyle: {
                    backgroundColor: '#0d0d0d',
                }
            }}
        >
            <Stack.Screen
                name='index'
                options={{ title: '🎮 Gamer Home' }}
            />
        </Stack>
    )
}