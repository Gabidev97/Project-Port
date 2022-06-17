import styles from "../styles/Formulario.module.css";
import Cartao from "../components/Cartao";
import Link from "../node_modules/next/link";
export default function Home() {
  return (
    <div className={styles.formulario}>
      <div>
        <Cartao bgcolor="#c0392c">
          <h1>Monty Hall</h1>
        </Cartao>
        <Cartao></Cartao>
      </div>
      <div>
        <Cartao> </Cartao>
        <Cartao bgcolor="#28a085">
          <Link href={`http://localhost:3000/Jogo/14/8`}>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Cartao>
      </div>
    </div>
  );
}
