import React from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './styles.module.scss';

interface Props{
    open: boolean;
}

export const Contact = ({open}: Props) => {

    const propsHeader = useSpring({
        opacity: open ? 1 : 0,
        x: open ? 0 : -500,
        delay: 100,
    });
    const propsContent = useSpring({
        opacity: open ? 1 : 0,
        x: open ? 0 : -500,
        delay: 300,
    });

    return (
        <div className={styles.container}>
            <animated.h2 style={{...propsHeader}}>Entre em contato comigo</animated.h2>
            <animated.div style={{...propsHeader}} className={styles.line} />

            <div className={styles.wrapper}>
                <animated.div style={{...propsContent}} className={styles.wrap}>
                    <form>
                        <label>
                            <p>Nome</p>
                            <input type="text" placeholder="Digite seu nome" />
                        </label>
                        <label>
                            <p>E-mail</p>
                            <input type="text" placeholder="Digite seu e-mail" />
                        </label>
                        <label>
                            <p>Telefone</p>
                            <input type="text" placeholder="Digite seu númeo de telefone para contato" />
                        </label>
                        <label>
                            <p>Dúvida</p>
                            <textarea placeholder="Digite sua dúvida" />
                        </label>
                        <button>Enviar</button>
                    </form>
                </animated.div>
                <animated.div className={styles.separator}>
                    <div></div>
                    <p>ou</p>
                    <div></div>
                </animated.div>
                <animated.div style={{...propsContent}} className={styles.wrap}>
                    <label className={styles.label}>
                        <h4>E-mail</h4>
                        <p>Kollen22@outlook.com</p>
                    </label>
                    <label className={styles.label}>
                        <h4>Telefone</h4>
                        <p>(61)99178-6805</p>
                    </label>
                    <label className={styles.label}>
                        <h4>WhatsApp</h4>
                        <button>WhatsApp</button>
                    </label>
                </animated.div>
            </div>
        </div>
    )
}
