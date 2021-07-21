import React from 'react';
import { DiMongodb } from 'react-icons/di';
import { FaReact } from 'react-icons/fa';
import { IoLogoJavascript, IoLogoNodejs } from 'react-icons/io';
import { SiNextDotJs, SiRedux, SiTypescript } from 'react-icons/si';
import { useSpring, animated } from 'react-spring';
import styles from './styles.module.scss';

interface Props{
    open: boolean;
}

export const About = ({open}: Props) => {

    const propsPhoto = useSpring({
        opacity: open ? 1 : 0,
        x: open ? 0 : -500,
        delay: 100,
    });

    const propsHeader = useSpring({
        opacity: open ? 1 : 0,
        x: open ? 0 : -500,
        delay: 200,
    });

    const propsDescrition = useSpring({
        opacity: open ? 1 : 0,
        x: open ? 0 : -500,
        delay: 300,
    });

    const propsStack = useSpring({
        opacity: open ? 1 : 0,
        x: open ? 0 : -500,
        delay: 400,
    });

    return (
        <div className={styles.container}>
            <animated.div style={{...propsPhoto}} className={styles.photo}>
                <img src="https://avatars.githubusercontent.com/u/70642744?v=4" alt="wallace" />
            </animated.div>
            <div className={styles.boxAbout}>
                <div>
                    <animated.p style={{...propsHeader}}>Sobre mim</animated.p>
                    <animated.h1 style={{...propsHeader}}>Olá, meu nome é Wallace De Paula Silva</animated.h1>
                    <animated.div style={{...propsHeader}} className={styles.line} />
                    <animated.p style={{...propsDescrition}} className={styles.description}>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend.
                    </animated.p>
                    <animated.h3 style={{...propsStack}}>Minha stack</animated.h3>
                    <animated.div style={{...propsStack}} className={styles.line_1} />
                    <animated.div style={{...propsStack}} className={styles.mystack}>
                        <label>
                            <IoLogoNodejs size={30} color="#fff" />
                        </label>
                        <label>
                            <IoLogoJavascript size={30} color="#fff" />
                        </label>
                        <label>
                            <SiTypescript size={30} color="#fff" />
                        </label>
                        <label>
                            <SiRedux size={30} color="#fff" />
                        </label>
                        <label>
                            <SiNextDotJs size={30} color="#fff" />
                        </label>
                        <label>
                            <FaReact size={30} color="#fff" />
                        </label>
                        <label>
                            <DiMongodb size={30} color="#fff" />
                        </label>
                    </animated.div>
                </div>
            </div>
        </div>
    )
}
