import { useEffect, useState } from "react";
import Porta from "../../../components/Portas";
import styles from "../../../styles/Jogo.module.css";
import { criarPortas, modificarPortas } from "../../../functions/Portas";
import  { useRouter } from "../../../node_modules/next/router";
import Link from "../../../node_modules/next/link"


export default function Jogo() {

  const router = useRouter()
  const [portas, setPortas] = useState([]);



useEffect(() => {
  const portas = +router.query.Portas
  const TemPresente = +router.query.TemPresente
  setPortas(criarPortas(portas, TemPresente))
},[router?.query])

console.log(router?.query)

  function renderizarPortas() {
    return portas.map((porta) => {
      return (
        <Porta
          key={porta.numero}
          value={porta}
          onChange={(novaPorta) =>
            setPortas(modificarPortas(portas, novaPorta))
          }
        />
      );
    });
  }

  return (
    <div id={styles.jogo}>
        <div className={styles.portas}>
         {renderizarPortas()}
        </div>

        <div>
          <Link href="/">
            <button>Reiniciar</button>
          </Link>
        </div>

       
    </div>
  );
}
