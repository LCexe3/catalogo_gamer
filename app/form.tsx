import Botao from '@/compenents/Botao'
import styles from '@/constants/styles'
import useFormUsuario from '@/hooks/userFormUsuario'
import Cpf from '@/utils/Cpf'
import { Text, TextInput, View } from 'react-native'

export default function TelaFormulario() {
    const { usuario, erros, setUsuario, salvar } = useFormUsuario()

    return (
        <View style={[styles.centralizado, { backgroundColor: '#0d0d0d', flex: 1 }]}>
            
            <Text style={{
                fontSize: 28,
                fontWeight: '800',
                color: '#00ffcc',
                marginBottom: 20,
                textShadowColor: '#00ffcc',
                textShadowOffset: { width: 0, height: 0 },
                textShadowRadius: 10
            }}>
                🎮 PLAYER DATA
            </Text>

            <TextInput
                placeholder="Nome"
                placeholderTextColor="#777"
                value={usuario.nome ?? ''}
                style={[
                    styles.input,
                    {
                        backgroundColor: '#1a1a1a',
                        color: '#fff',
                        borderWidth: 2,
                        borderColor: '#00ffcc',
                        borderRadius: 12,
                        padding: 14,
                        width: '85%',
                        marginBottom: 10
                    },
                    erros.nome && { borderColor: 'red' }
                ]}
                onChangeText={(nome) => setUsuario({ ...usuario, nome })}
            />

            {erros.nome && (
                <Text style={{ color: 'red', marginBottom: 10 }}>
                    {erros.nome}
                </Text>
            )}

            <TextInput
                placeholder="CPF"
                placeholderTextColor="#777"
                value={usuario.cpf ?? ''}
                style={[
                    styles.input,
                    {
                        backgroundColor: '#1a1a1a',
                        color: '#fff',
                        borderWidth: 2,
                        borderColor: '#8a2be2',
                        borderRadius: 12,
                        padding: 14,
                        width: '85%',
                        marginBottom: 20
                    }
                ]}
                keyboardType="phone-pad"
                onChangeText={(cpf) => setUsuario({ ...usuario, cpf: Cpf.formatar(cpf) })}
            />

            <Botao onPress={salvar}>
                <Text style={{
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: 16
                }}>
                    ⚡ SALVAR PLAYER
                </Text>
            </Botao>

        </View>
    )
}