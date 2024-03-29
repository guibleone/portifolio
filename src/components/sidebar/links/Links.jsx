
import { motion } from 'framer-motion'


const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
}

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
}

export default function Links() {

  const items = [
    "Início",
    "Serviços",
    "Portifólio",
    "Contato",
    'Sobre'
  ]


  return (
    <motion.div variants={variants} className="links">
      {items.map(item => (
        <motion.a 
        whileHover={{scale: 1.1}}
        whileTap={{scale: 0.95}}
        variants={itemVariants} 
        href={`#${item}`} 
        key={item}>{item}</motion.a>
      ))}
    </motion.div>
  )
}
