import React, { ChangeEvent, useEffect } from 'react';
import styles from './styles.module.scss';
import { useSpring, animated } from 'react-spring';
import {HiOutlineMenuAlt1} from 'react-icons/hi';
import { Drawer } from '../Drawer';
import { useState } from 'react';
import { Link as LinkS } from 'react-scroll';

interface Props{
    scroll: number;
}

export const Header = ({scroll}: Props) => {
    const [openMenuMobile, setOpenMenuMobile] = useState<boolean>(false);
    const propsMobile = useSpring({
        from: {x: -1000},
        to: {x: 0},
        delay: 500
    });

    const propsWeb = useSpring({
        from: {x: -1000},
        to: {x: 0},
        delay: 700
    });

    const propsHeader = useSpring({
        from: {y: -1000},
        to: {y: 0},
        delay: 100
    });

    const handleCancel = () => {
        setOpenMenuMobile(prevState => !prevState);
    };

    return (
        <animated.div style={{...propsHeader}} className={styles.container}>
            <animated.div style={{...propsMobile}} className={styles.mobile}>
                <HiOutlineMenuAlt1 style={{marginTop: '1rem'}} size={50} color="#fff" onClick={handleCancel} />
            </animated.div>
            <animated.ul style={{...propsWeb}}>
                <LinkS 
                    className={scroll >= 0 && scroll < 600 ? styles.actived : styles.li}
                    to="home"
                    smooth={true}
                    duration={500} 
                    spy={true} 
                    offset={-80} 
                    // onClick={() => handleScrollTo(0, 0)}
                >Início</LinkS>
                <LinkS
                    to="about"
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={300}
                    className={scroll >= 600 && scroll < 1500 ? styles.actived : styles.li} 
                    // onClick={() => handleScrollTo(400, 1500)}
                    >Sobre</LinkS>
                <LinkS
                    to="portfolio"
                    className={scroll >= 1500 && scroll < 2500 ? styles.actived : styles.li}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}
                    >Portifólio</LinkS>
                <LinkS
                    to="contact"
                    className={scroll >= 2500 && scroll < 3000 ? styles.actived : styles.li}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}
                    >Contato</LinkS>
            </animated.ul>
            <Drawer open={openMenuMobile} handleCancel={handleCancel} />
        </animated.div>
    )
}
