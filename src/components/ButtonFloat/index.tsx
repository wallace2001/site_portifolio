import React from 'react';
import styles from './styles.module.scss';
import { FaArrowUp } from 'react-icons/fa';
import { useSpring, animated } from 'react-spring';
import {Link} from 'react-scroll';

interface Props{
    scroll: number;
}

export const ButtonFloat = ({scroll}: Props) => {
    const props = useSpring({
        opacity: scroll > 50 ? 1 : 0,
        delay: 200
    });
    return (
        <animated.div style={{...props}} className={styles.container}>
            <Link
                style={{
                    cursor: "pointer", 
                    width: '100%', 
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
            >
                <FaArrowUp size={30} color="#fff" />
            </Link>
        </animated.div>
    )
}
