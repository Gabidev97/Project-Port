import { Children } from 'react'
import styles from '../styles/Cartao.module.css'


interface cartaoProps {
    bgcolor? : string
    children? : any
}


export default function Cartao(props: cartaoProps){
    return (

        <div className={styles.cartao}
        style={{backgroundColor: props.bgcolor ?? "#ffff" }}>
         {props.children}

        </div>
    )
}