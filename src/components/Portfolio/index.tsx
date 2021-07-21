import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Products } from '../Products';
import styles from './styles.module.scss';

interface Props{
    scroll: number;
}

export const Portfolio = ({scroll}: Props) => {

    const propsHeader = useSpring({
        opacity: scroll >= 1500 ? 1 : 0,
        x: scroll >= 1500 ? 0 : -500,
        delay: 100
    });
    const propsRest = useSpring({
        opacity: scroll >= 1500 ? 1 : 0,
        x: scroll >= 1500 ? 0 : -500,
        delay: 200
    });

    return (
        <div className={styles.container}>
            <animated.h2 style={{...propsHeader}}>PORTIFÓLIO</animated.h2>
            <animated.div className={styles.line} style={{...propsHeader}} />

            <animated.div style={{...propsRest}} className={styles.product}>
                <Products 
                    title="Ecommerce"
                    name="Sonho Veg"
                    reverse={false}
                    description="Este é um site de vendas de doces, onde há pagamentos, contas, painel de controle pra administrar praticamente tudo que acontece no site, status das comidas e agendamento para entrega e muito mais."

                />
                <Products 
                    title="Ecommerce"
                    name="Sonho Veg"
                    reverse={true}
                    description="Este é um site de vendas de doces, onde há pagamentos, contas, painel de controle pra administrar praticamente tudo que acontece no site, status das comidas e agendamento para entrega e muito mais."

                />
            </animated.div>
        </div>
    )
}
