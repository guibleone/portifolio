import { useRef } from 'react'
import './services.scss'
import { motion, useInView } from 'framer-motion'

const variants = {
    initial: {
        y: 100,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    }
}


export default function Services() {

    const ref = useRef()

    const isInView = useInView(ref, { margin: '-100px' })

    return (
        <motion.div variants={variants} initial='initial' ref={ref} animate={isInView && 'animate'} className="services">
            <motion.div variants={variants} className="textContainer">
                <p>
                    focado em desenvolvimento web,
                    <br /> com experiência Full Stack
                </p>
                <hr />
            </motion.div>
            <motion.div variants={variants} className="titleContainer">
                <div className="title">
                    <img src="/people.webp" alt="" />
                    <h1><motion.b
                        whileHover={{
                            color: 'orange'
                        }}>Ideias </motion.b> Únicas</h1>
                </div>
                <div className="title">
                    <h1>
                        <motion.b
                            whileHover={{
                                color: 'orange'
                            }}>
                            Para Seu
                        </motion.b> Negócio</h1>
                    <button>
                        O que eu faço?
                    </button>
                </div>
            </motion.div>
            <motion.div variants={variants} className="listContainer">
                <motion.div className="box" whileHover={{ backgroundColor: 'lightgray', color: 'black' }}  >
                    <h2>
                        Desenvolvimento de Sites
                    </h2>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem tempora recusandae ipsa voluptate accusantium, ut voluptatem delectus cumque expedita ipsam facilis quia magnam libero nobis. Explicabo illum autem doloribus qui.
                    </p>
                    <button>
                        Ver
                    </button>
                </motion.div>
                <motion.div className="box" whileHover={{ backgroundColor: 'lightgray', color: 'black' }} >
                    <h2>
                        Desenvolvimento de Sites
                    </h2>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem tempora recusandae ipsa voluptate accusantium, ut voluptatem delectus cumque expedita ipsam facilis quia magnam libero nobis. Explicabo illum autem doloribus qui.
                    </p>
                    <button>
                        Ver
                    </button>
                </motion.div>
                <motion.div className="box" whileHover={{ backgroundColor: 'lightgray', color: 'black' }} >
                    <h2>
                        Desenvolvimento de Sites
                    </h2>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem tempora recusandae ipsa voluptate accusantium, ut voluptatem delectus cumque expedita ipsam facilis quia magnam libero nobis. Explicabo illum autem doloribus qui.
                    </p>
                    <button>
                        Ver
                    </button>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}
