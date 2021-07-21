import React from 'react';
import { animated, useSpring } from 'react-spring';
import styles from './styles.module.scss';

export const Loading = () => {

    const props = useSpring({
        width: true ? '100%' : 0,
        delay: 300
    });

    return (
        <animated.div style={{...props}} className={styles.container}>
            <div>
                <h4>Aguarde o site carregar...</h4>
                <div className={styles.line} />
            </div>
            <div className={styles.loading}>
                {true ? 100 : 0}
            </div>
        </animated.div>
    )
}
