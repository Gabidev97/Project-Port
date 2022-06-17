
import Porta from "../components/Portas";
import PortaModel from "../model/Porta";

export function criarPortas(qtda: number, selecionada: number): PortaModel[] {
    return Array.from ({ length: qtda}, (_, i ) => {
        const numero = i + 1
        const temPresente = numero === selecionada
         return new PortaModel(numero, temPresente)
    })
}

export function modificarPortas(portas: PortaModel[], portaModificada: PortaModel): PortaModel[]{
 return portas.map(atualPorta => {
    const igualModificada = atualPorta.numero === portaModificada.numero


    if(igualModificada){
        return portaModificada
    } else {
        return atualPorta.desmarcar()
    }
 })
}