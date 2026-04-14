export default class Cpf {
    static formatar(cpf: string): string {
        if (cpf.length > 14) return cpf.substring(0, 14)
        return cpf
    }

    static replacecpf(cpf: string): string {
        return cpf.replace(/\D/g, '')
    }
}