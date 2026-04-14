import Botao from '@/components/Botao'
import styles from '@/constants/styles'
import useFormUsuario from '@/hooks/userFormUsuario'
import Cpf from '@/utils/Cpf'
import { Text, TextInput, View } from 'react-native'

export default function TelaFormulario() {
    const { usuario, erros, setUsuario, salvar } = useFormUsuario()

    return (
        <View style={styles.centralizado}>

            <Text style={styles.neonTitle}>
                🎮 PLAYER DATA
            </Text>

            <TextInput
                placeholder="Nome"
                placeholderTextColor="#777"
                value={usuario.nome ?? ''}
                style={[
                    styles.input,
                    styles.inputPrimary,
                    erros.nome && styles.inputError
                ]}
                onChangeText={(nome) => setUsuario({ ...usuario, nome })}
            />

            {erros.nome && (
                <Text style={styles.errorText}>
                    {erros.nome}
                </Text>
            )}

            <TextInput
                placeholder="Senha"
                placeholderTextColor="#777"
                value={usuario.cpf ?? ''}
                style={[styles.input, styles.inputSecondary]}
                keyboardType="phone-pad"
                onChangeText={(cpf) =>
                    setUsuario({ ...usuario, cpf: Cpf.formatar(cpf) })
                }
            />

            <Botao onPress={salvar}>
                <Text style={styles.link}>
                    ⚡ SALVAR PLAYER
                </Text>
            </Botao>

        </View>
    )
}