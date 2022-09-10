import React from 'react';
import { useContext } from 'react';
import { DiMongodb } from 'react-icons/di';
import { FaJava, FaReact } from 'react-icons/fa';
import { IoLogoJavascript, IoLogoNodejs } from 'react-icons/io';
import { SiNextDotJs, SiRedux, SiSpring, SiTypescript } from 'react-icons/si';
import { useSpring, animated } from 'react-spring';
import { WebContext } from '../../context/contact';
import styles from './styles.module.scss';

export const About = () => {

    const {scrollActive} = useContext(WebContext);

    const propsPhoto = useSpring({
        opacity: scrollActive.about ? 1 : 0,
        x: scrollActive.about ? 0 : -500,
        delay: 100,
    });

    const propsHeader = useSpring({
        opacity: scrollActive.about ? 1 : 0,
        x: scrollActive.about ? 0 : -500,
        delay: 200,
    });

    const propsDescrition = useSpring({
        opacity: scrollActive.about ? 1 : 0,
        x: scrollActive.about ? 0 : -500,
        delay: 300,
    });

    const propsStack = useSpring({
        opacity: scrollActive.about ? 1 : 0,
        x: scrollActive.about ? 0 : -500,
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
                        Olá, me chamo Wallace de Paula Silva e tenho 20 anos. Atualmente trabalho como Backend, com a stack Java e Spring Boot e tenho experiência com FrontEnd também.   
                    </animated.p>
                    <animated.p style={{...propsDescrition}} className={styles.description}>
                        Eu sou uma pessoa muito esforçada, dedicada e com muita força de vontate. Sempre dou o meu melhor e sou bastante persistente, quando vejo que algo não está perfeito ou que não está da maneira que tinha comno estar, não fico confortável.
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
                        <label>
                            <FaJava size={30} color="#fff" />
                        </label>
                        <label>
                            <SiSpring size={30} color="#fff" />
                        </label>
                    </animated.div>
                </div>
            </div>
        </div>
    )
}
