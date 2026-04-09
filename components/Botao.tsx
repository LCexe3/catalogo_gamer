import React from 'react'
import { Pressable, StyleSheet } from 'react-native'

export interface BotaoProps {
    children: React.ReactNode
    onPress?: () => void
}

export default function Botao(props: BotaoProps) {
    return (
        <Pressable
            style={({ pressed }) => [
                {
                    opacity: pressed ? 0.85 : 1,
                    transform: [{ scale: pressed ? 0.97 : 1 }]
                },
                styles.botao
            ]}
            onPress={props.onPress}
        >
            {props.children}
        </Pressable>
    )
}

const styles = StyleSheet.create({
    botao: {
        backgroundColor: '#8a2be2',
        paddingHorizontal: 24,
        paddingVertical: 14,
        borderRadius: 14,
        borderWidth: 2,
        borderColor: '#00ffcc',
        shadowColor: '#00ffcc',
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 8,
        minWidth: 180,
        alignItems: 'center',
    },
})