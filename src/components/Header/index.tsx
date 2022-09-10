import React, { ChangeEvent, useEffect } from 'react';
import styles from './styles.module.scss';
import { useSpring, animated } from 'react-spring';
import {HiOutlineMenuAlt1} from 'react-icons/hi';
import { Drawer } from '../Drawer';
import { useState } from 'react';
import { Link as LinkS } from 'react-scroll';
import { useContext } from 'react';
import { WebContext } from '../../context/contact';

export const Header = () => {
    const [openMenuMobile, setOpenMenuMobile] = useState<boolean>(false);
    const {handleChangeScroll} = useContext(WebContext);
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
                    className={styles.li}
                    activeClass={styles.actived}
                    to="home"
                    smooth={true}
                    duration={500} 
                    spy={true}
                    onSetActive={() => handleChangeScroll("home")}
                    // onClick={() => handleScrollTo(0, 0)}
                >Início</LinkS>
                <LinkS
                    to="about"
                    smooth={true}
                    duration={500}
                    activeClass={styles.actived}
                    spy={true}
                    onSetActive={() => handleChangeScroll("about")}
                    className={styles.li}
                    // onClick={() => handleScrollTo(400, 1500)}
                    >Sobre</LinkS>
                <LinkS
                    to="portfolio"
                    className={styles.li}
                    activeClass={styles.actived}
                    smooth={true}
                    duration={500}
                    spy={true}
                    onSetActive={() => handleChangeScroll("portfolio")}
                    >Portifólio</LinkS>
                <LinkS
                    to="contact"
                    activeClass={styles.actived}
                    className={styles.li}
                    smooth={true}
                    duration={500}
                    spy={true}
                    onSetActive={() => handleChangeScroll("contact")}
                    >Contato</LinkS>
            </animated.ul>
            <Drawer open={openMenuMobile} handleCancel={handleCancel} />
        </animated.div>
    )
}
