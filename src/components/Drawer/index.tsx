import React, { useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import {IoClose} from 'react-icons/io5';
import styles from './styles.module.scss';
import { Link as LinkS } from 'react-scroll';

interface Props{
    open?: boolean;
    handleCancel: () => void;
}

export const Drawer = ({open, handleCancel}: Props) => {
    const ref = useRef();

    const propsContainer = useSpring({
        // width: !open && 0,
        x: open ? 0 : -1000,
        delay: 100,
    });

    return (
        <animated.div ref={ref} style={{...propsContainer}} className={styles.container}>
            <div><IoClose cursor="pointer" onClick={handleCancel} size={50} color="#fff" /></div>
            <ul>
            <LinkS 
                    className={styles.li}
                    to="home"
                    smooth={true}
                    duration={500} 
                    spy={true} 
                    exact='true' 
                    offset={-80} 
                    onClick={handleCancel}
                >Início</LinkS>
                <LinkS
                    to="about"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={300}
                    className={styles.li} 
                    onClick={handleCancel}
                    >Sobre</LinkS>
                <LinkS
                    to="portfolio"
                    className={styles.li}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    onClick={handleCancel}
                    >Portifólio</LinkS>
                <LinkS
                    to="#"
                    className={styles.li}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    onClick={handleCancel}
                    >Contato</LinkS>
            </ul>
        </animated.div>
    )
}
