import { useSpring, animated } from 'react-spring';
import { IoLogoNodejs, IoLogoJavascript } from 'react-icons/io';
import { SiTypescript, SiRedux, SiNextDotJs } from 'react-icons/si';
import { DiMongodb } from 'react-icons/di';
import { FaReact } from 'react-icons/fa';
import styles from '../../styles/Home.module.scss';
import { Header } from '../components/Header';
import { About } from '../components/About';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Home() {
  const [showAboutSession, setShowAboutSession] = useState<boolean>(false);
  const [scroll, setScroll] = useState<number>(0);

  const propsVideo = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1
    },
    delay: 200,
  });

  const propsTitle = useSpring({
    from: {
      x: -1000,
    },
    to: {
      x: 0,
    },
    delay: 100,
  });
  const propsDesc = useSpring({
    from: {
      x: -1000,
    },
    to: {
      x: 0,
    },
    delay: 300,
  });
  const propsRest = useSpring({
    from: {
      x: -1000,
    },
    to: {
      x: 0,
    },
    delay: 500,
  });

  useEffect(() => {
    window.onscroll = () => {
      setScroll(document.documentElement.scrollTop);
      if(document.documentElement.scrollTop >= 400){
        setShowAboutSession(true);
      }
    }; 
  }, []);


  return (
    <div className={styles.container}>
      <Header scroll={scroll} />
      <div className={styles.video}>
        <animated.video style={{...propsVideo}} autoPlay loop muted src="bg.mp4"></animated.video>
      </div>
      <div className={styles.apresentation}>
        <animated.h2 style={{...propsTitle}}>Bem vindo</animated.h2>
        <animated.h5 style={{...propsDesc}}>Olá, meu nome é Wallace De Paula Silva e muito bem vindo ao meu site portifólio.</animated.h5>
        <animated.div style={{...propsRest}} className={styles.stacks}>
          <IoLogoNodejs size={30} color="#fff" />
          <IoLogoJavascript size={30} color="#fff" />
          <SiTypescript size={30} color="#fff" />
          <SiRedux size={30} color="#fff" />
          <SiNextDotJs size={30} color="#fff" />
          <FaReact size={30} color="#fff" />
          <DiMongodb size={30} color="#fff" />
        </animated.div>
        <animated.button style={{...propsRest}}>Portifólio</animated.button>
      </div>
      <div className={styles.about}>
        <About open={showAboutSession} />
      </div>
    </div>
  )
}
