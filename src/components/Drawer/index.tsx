import React, { useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import {IoClose} from 'react-icons/io5';
import styles from './styles.module.scss';

interface Props{
    open?: boolean;
    handleCancel: () => void;
}

export const Drawer = ({open, handleCancel}: Props) => {
    const ref = useRef();

    const propsContainer = useSpring({
        x: open ? 0 : -500,
        delay: 100,
    });

    return (
        <animated.div ref={ref} style={{...propsContainer}} className={styles.container}>
            <div><IoClose cursor="pointer" onClick={handleCancel} size={50} color="#fff" /></div>
            <ul>
                <li>Início</li>
                <li>Sobre</li>
                <li>Portifólio</li>
                <li>Contato</li>
            </ul>
        </animated.div>
    )
}
