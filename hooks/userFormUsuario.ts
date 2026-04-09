import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from 'react'

export default function useFormUsuario() {
    const [usuario, setUsuario] = useState<any>({})
    const [erros, setErros] = useState<any>({})

    useEffect(() => {
        carregarUsuario()
    }, [])

    async function carregarUsuario() {
        const usuarioSalvo = await AsyncStorage.getItem('usuario')

        if (usuarioSalvo) {
            setUsuario(JSON.parse(usuarioSalvo))
        }
    }

    function validar() {
        let novosErros: any = {}

        if (!usuario.nome) {
            novosErros.nome = 'Nome é obrigatório'
        } else if (usuario.nome.length < 3) {
            novosErros.nome = 'Nome deve ter no mínimo 3 caracteres'
        }

        setErros(novosErros)

        return Object.keys(novosErros).length === 0
    }

    async function salvar() {
        if (validar()) {
            await AsyncStorage.setItem('usuario', JSON.stringify(usuario))
        }
    }

    return {
        usuario,
        erros,
        setUsuario,
        salvar,
    }
}