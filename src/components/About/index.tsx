import React from 'react';
import { useContext } from 'react';
import { DiMongodb } from 'react-icons/di';
import { FaReact } from 'react-icons/fa';
import { IoLogoJavascript, IoLogoNodejs } from 'react-icons/io';
import { SiNextDotJs, SiRedux, SiTypescript } from 'react-icons/si';
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
                        Olá, me chamo Wallace de Paula Silva, tenho 19 anos e estou cursando ciência da computação na uniCEUB. Sou um desenvolvedor full stack faz um ano e meio e comecei a trabalhar profissionalmente esse ano como freelancer. Mais abaixo você vai encontrar alguns dos meus projetos.  
                    </animated.p>
                    <animated.p style={{...propsDescrition}} className={styles.description}>
                        Eu sou uma pessoa muito esforçada, dedicada e com muita força de vontate. Quando eu quero algo e gosto muito eu faço acontecer, não tem obstáculos que me derrube. Eu amo ser programador e quero alcançar muitos objetivos e sonhos.
                    </animated.p>
                    <animated.p style={{...propsDescrition}} className={styles.description}>
                        Obrigado!
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
