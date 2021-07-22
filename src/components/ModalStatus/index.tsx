import React from 'react';
import { useContext } from 'react';
import { useSpring, animated } from 'react-spring';
import { WebContext } from '../../context/contact';
import styles from './styles.module.scss';

export const ModalStatus = () => {
    const {status} = useContext(WebContext);

    const props = useSpring({
        opacity: status.response ? 1 : 0,
        y: status.response ? 0 : -2000,
        delay: 300,
        loop: true,
    });

    return (
        <div className={status.response ? styles.container : styles.displayNone}>
            <animated.div style={{...props}} className={styles.box}>
                {status.success ?
                (<h4 className={styles.successH4}>A mensagem foi enviada com sucesso</h4>) : 
                (<h4 className={styles.ErrorH4}>Erro ao enviar mensagem</h4>)}
                <p>
                    {status.success ?
                    "Obrigado! A mensagem já foi encaminhada e te responderei o mais rápido possível." 
                    : "Que pena! Ocorreu um erro ao enviar a sua mensagem, por favor, tente novamente."}
                </p>
                <button 
                    onClick={() => window.location.reload()}
                    className={status.success ? styles.buttonSuccess : styles.buttonError}>
                    Voltar
                </button>
            </animated.div>
        </div>
    )
}
