import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import './portfolio.scss'
import { useRef } from "react"

const items = [
    {
        id: '1',
        title: 'React Commerce',
        img: "https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolorem quae obcaecati, distinctio perspiciatis quasi, mollitia aliquam vitae sunt optio delectus maiores cumque rerum porro beatae magnam, explicabo molestias nisi."
    },
    {
        id: '2',
        title: 'Next JS',
        img: "https://images.pexels.com/photos/3635300/pexels-photo-3635300.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400&h=250&fit=crop&crop=focalpoint",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolorem quae obcaecati, distinctio perspiciatis quasi, mollitia aliquam vitae sunt optio delectus maiores cumque rerum porro beatae magnam, explicabo molestias nisi."
    },
    {
        id: '3',
        title: 'Vainla Js',
        img: "https://images.pexels.com/photos/2765871/pexels-photo-2765871.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400&h=250&fit=crop&crop=focalpoint",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolorem quae obcaecati, distinctio perspiciatis quasi, mollitia aliquam vitae sunt optio delectus maiores cumque rerum porro beatae magnam, explicabo molestias nisi."
    },
    {
        id: '4',
        title: 'Music App',
        img: "https://images.pexels.com/photos/3330895/pexels-photo-3330895.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=400&h=250&fit=crop&crop=focalpoint",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dolorem quae obcaecati, distinctio perspiciatis quasi, mollitia aliquam vitae sunt optio delectus maiores cumque rerum porro beatae magnam, explicabo molestias nisi."
    },

]

const Single = ({ item }) => {

    const ref = useRef()

    const { scrollYProgress } = useScroll({
        target: ref,
        //offset: ['start start', 'end start']
    })

    const y = useTransform(scrollYProgress, [0, 1], [-100, 100])


    return (
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt={item.name} />
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>Ver Demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default function Portfolio() {

    const ref = useRef()
    const { scrollYProgress } = useScroll({ target: ref, offset: ['end end', 'start start'] })

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 40,
    })

    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>
                    Projetos Recentes
                </h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
}
