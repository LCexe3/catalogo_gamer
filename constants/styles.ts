import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    centralizado: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0d0d0d',
        padding: 20,
    },

    input: {
        backgroundColor: '#1a1a1a',
        color: '#fff',
        borderWidth: 2,
        borderColor: '#00ffcc',
        borderRadius: 12,
        padding: 14,
        margin: 10,
        width: '85%',
        fontSize: 16,
    },

    inputError: {
        borderColor: 'red',
    },

    tituloGrande: {
        fontSize: 34,
        fontWeight: '800',
        color: '#8a2be2',
        textAlign: 'center',
        textShadowColor: '#8a2be2',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 10,
    },

    tituloMedio: {
        fontSize: 24,
        fontWeight: '700',
        color: '#00ffcc',
        textAlign: 'center',
    },

    texto: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
    },

    card: {
        backgroundColor: '#151515',
        padding: 20,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#8a2be2',
        width: '90%',
        marginVertical: 10,
    },
})

export default styles