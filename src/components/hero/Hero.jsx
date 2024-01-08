import './hero.scss';
import { motion } from 'framer-motion';

const textVariants = {
    initial: {
        x: -500,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    },
    scrollButton: {
        y: 10,
        opacity:0,
        transition: {
            duration:2,
            repeat: Infinity,
        }
    }

}

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition: {
            repeat: Infinity,
            repeatType: 'mirror',
            duration: 20,
        }
    },
}

export default function Hero() {
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial='initial' animate='animate'>
                    <motion.h2 variants={textVariants}>
                        GUILHERME LEONE
                    </motion.h2>
                    <motion.h1 variants={textVariants}>
                        Desenvolvedor Web Full Stack
                    </motion.h1>
                    <div className="buttons">
                        <motion.button variants={textVariants}>Ver Projetos Recentes</motion.button>
                        <motion.button variants={textVariants}>Entrar em Contato</motion.button>
                    </div>
                    <motion.img variants={textVariants} animate='scrollButton' src="/scroll.png" alt="" />
                </motion.div>

                <motion.div variants={sliderVariants} initial='inital' animate='animate' className="sliddingText">
                    Desenvolvedor Criativo Inovador 
                </motion.div>

                <div className="imageContainer">
                    <img src="/hero.png" alt="hero" /> 
                </div>
            </div>
        </div>
    )
}
