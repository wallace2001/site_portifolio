import { useSpring, animated } from 'react-spring';
import { IoLogoNodejs, IoLogoJavascript } from 'react-icons/io';
import { SiTypescript, SiRedux, SiNextDotJs } from 'react-icons/si';
import { DiMongodb } from 'react-icons/di';
import { AiFillInstagram, AiFillFacebook, AiFillLinkedin, AiFillGithub, AiOutlineWhatsApp } from 'react-icons/ai';
import { FaReact } from 'react-icons/fa';
import styles from '../../styles/Home.module.scss';
import { Header } from '../components/Header';
import { About } from '../components/About';
import { useEffect } from 'react';
import { useState } from 'react';
import { Portfolio } from '../components/Portfolio';
import { Contact } from '../components/Contact';
import { ButtonFloat } from '../components/ButtonFloat';
import { Link } from 'react-scroll';
import { ModalStatus } from '../components/ModalStatus';
import { Loading } from '../components/Loading';
import { GetStaticProps } from 'next';

export default function Home() {
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
    window.onscroll = () => setScroll(document.documentElement.scrollTop);
  }, []);


  return (
    <div className={styles.container}>
      <Header />
      <Loading />
      <div className={styles.video}>
        <animated.video style={{...propsVideo}} autoPlay loop muted src="bg.mp4"></animated.video>
      </div>
      <div id="home" className={styles.apresentation}>
        <animated.h2 style={{...propsTitle}}>Bem vindo</animated.h2>
        <animated.h5 style={{...propsDesc}}>Olá, meu nome é Wallace De Paula Silva e bem vindo ao meu site portfólio.</animated.h5>
        <animated.div style={{...propsRest}} className={styles.stacks}>
          <IoLogoNodejs size={30} color="#fff" />
          <IoLogoJavascript size={30} color="#fff" />
          <SiTypescript size={30} color="#fff" />
          <SiRedux size={30} color="#fff" />
          <SiNextDotJs size={30} color="#fff" />
          <FaReact size={30} color="#fff" />
          <DiMongodb size={30} color="#fff" />
        </animated.div>
        <animated.button style={{...propsRest}}>
          <Link
            to="portfolio"
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}  
          >
            Portfólio
          </Link>
        </animated.button>
      </div>
      <div id="about" className={styles.about}>
        <About />
      </div>
      <div className={styles.portfolio} id="portfolio">
        <Portfolio />
      </div>
      <div className={styles.contact} id="contact">
        <Contact />
      </div>
      <ButtonFloat scroll={scroll} />
      <div className={styles.footer}>
        <h4>2021 - Todos os direitos autorais reservados</h4>
        <div>
          <a href="https://www.instagram.com/wallace.2001/" target="_blank">
            <AiFillInstagram size={30} color="#000" />
          </a>
          <a href="https://www.facebook.com/wallace.silva.10420/" target="_blank">
            <AiFillFacebook size={30} color="#000" />
          </a>
          <a href="https://www.linkedin.com/in/wallace-silva-2a40b41b6/" target="_blank">
            <AiFillLinkedin size={30} color="#000" />
          </a>
          <a href="https://github.com/wallace2001" target="_blank">
            <AiFillGithub size={30} color="#000" />
          </a>
        </div>
      </div>
      <ModalStatus />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async() => {

  return {
    props: {},
    revalidate: 60 * 60 * 100,
  };
};
