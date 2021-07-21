import React, { ChangeEvent, useEffect } from 'react';
import styles from './styles.module.scss';
import { useSpring, animated } from 'react-spring';
import {HiOutlineMenuAlt1} from 'react-icons/hi';
import { Drawer } from '../Drawer';
import { useState } from 'react';

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

    const handleScrollTo = (before: number, after: number) => {
        document.documentElement.scrollTo(before, after);
    }

    console.log(scroll);

    const handleCancel = () => {
        setOpenMenuMobile(prevState => !prevState);
    };

    return (
        <animated.div style={{...propsHeader}} className={styles.container}>
            <animated.div style={{...propsMobile}} className={styles.mobile}>
                <HiOutlineMenuAlt1 style={{marginTop: '1rem'}} size={50} color="#fff" onClick={handleCancel} />
            </animated.div>
            <animated.ul style={{...propsWeb}}>
                <li className={scroll >= 0 && scroll < 400 ? styles.actived : ""} onClick={() => handleScrollTo(0, 0)}>Início</li>
                <li className={scroll >= 400 && scroll < 1500 ? styles.actived : ""} onClick={() => handleScrollTo(400, 1500)}>Sobre</li>
                <li>Portifólio</li>
                <li>Contato</li>
            </animated.ul>
            <Drawer open={openMenuMobile} handleCancel={handleCancel} />
        </animated.div>
    )
}
