import React, { useContext } from 'react';
import { useSpring, animated } from 'react-spring';
import { portfolio } from '../../config/portfolio';
import { WebContext } from '../../context/contact';
import { Products } from '../Products';
import styles from './styles.module.scss';

export const Portfolio = () => {

    const {scrollActive} = useContext(WebContext);

    const propsHeader = useSpring({
        opacity: scrollActive.portfolio ? 1 : 0,
        x: scrollActive.portfolio ? 0 : -500,
        delay: 100
    });
    const propsRest = useSpring({
        opacity: scrollActive.portfolio ? 1 : 0,
        x: scrollActive.portfolio ? 0 : -500,
        delay: 200
    });

    return (
        <div className={styles.container}>
            <animated.h2 style={{...propsHeader}}>PORTIFÓLIO</animated.h2>
            <animated.div className={styles.line} style={{...propsHeader}} />

            <animated.div style={{...propsRest}} className={styles.product}>
                {portfolio.map((item, index) => {
                    return(
                        <Products
                            key={index}
                            item={item}
                        />
                    );
                })}
            </animated.div>
        </div>
    )
}
