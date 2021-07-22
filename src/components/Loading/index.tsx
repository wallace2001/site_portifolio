import React from 'react';
import { animated, useSpring } from 'react-spring';
import styles from './styles.module.scss';

export const Loading = () => {

    const props = useSpring({
        from: {opacity: 0.4},
        to: {opacity: 1},
        loop: true,
        delay: 300
    });

    return (
        <div className={styles.container}>
            <animated.div style={{...props}} className={styles.loading} />
        </div>
    )
}
