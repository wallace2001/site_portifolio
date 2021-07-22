import React, { useContext, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import {IoClose} from 'react-icons/io5';
import styles from './styles.module.scss';
import { Link as LinkS } from 'react-scroll';
import { WebContext } from '../../context/contact';

interface Props{
    open?: boolean;
    handleCancel: () => void;
}

export const Drawer = ({open, handleCancel}: Props) => {
    const ref = useRef();
    const {handleChangeScroll} = useContext(WebContext);
    const propsContainer = useSpring({
        x: open ? 0 : -1000,
        delay: 200,
    });
    const propsContainerDisplay = useSpring({
        display: open ? 'flex' : 'none',
        delay: 400,
    });

    return (
        <animated.div ref={ref} style={{...propsContainer, ...propsContainerDisplay}} className={styles.container}>
            <div><IoClose cursor="pointer" onClick={handleCancel} size={50} color="#fff" /></div>
            <ul className={styles.ul}>
            <LinkS 
                    className={styles.li}
                    to="home"
                    smooth={true}
                    duration={500} 
                    spy={true} 
                    offset={-80} 
                    onClick={handleCancel}
                    onSetActive={() => handleChangeScroll("home")}
                >Início</LinkS>
                <LinkS
                    to="about"
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}
                    className={styles.li} 
                    onClick={handleCancel}
                    onSetActive={() => handleChangeScroll("about")}
                    >Sobre</LinkS>
                <LinkS
                    to="portfolio"
                    className={styles.li}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}
                    onClick={handleCancel}
                    onSetActive={() => handleChangeScroll("portfolio")}
                    >Portifólio</LinkS>
                <LinkS
                    to="contact"
                    className={styles.li}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}
                    onClick={handleCancel}
                    onSetActive={() => handleChangeScroll("contact")}
                    >Contato</LinkS>
            </ul>
        </animated.div>
    )
}
