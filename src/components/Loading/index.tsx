import React from 'react';
import { useContext } from 'react';
import { animated, useSpring } from 'react-spring';
import { WebContext } from '../../context/contact';
import styles from './styles.module.scss';

export const Loading = () => {

    const {firstAccess, loading} = useContext(WebContext);

    const props = useSpring({
        from: {opacity: 0.4},
        to: {opacity: 1},
        loop: true,
        delay: 300
    });
    const propsContainer = useSpring({
        opacity: firstAccess || loading ? 1 : 0,
        delay: 300
    });

    return (
        <animated.div style={{...propsContainer}} className={firstAccess || loading ? styles.container : styles.displayNone}>
            <animated.div style={{...props}} className={styles.loading} />
        </animated.div>
    )
}
