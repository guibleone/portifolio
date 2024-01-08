import Sidebar from '../sidebar/Sidebar';
import './navbar.scss';
import { motion } from 'framer-motion';

export default function Navbar() {
    return (
        <div className='navbar'>
            {/**Sidebar */}
            <Sidebar />
            <div className="wrapper">
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Guilherme Leone
                </motion.span>
                <div className="social">
                    <a href="#"><img src="/facebook.png" alt="facebook" /></a>
                    <a href="#"><img src="/instagram.png" alt="instagram" /></a>
                    <a href="#"><img src="/youtube.png" alt="youtube" /></a>
                </div>
            </div>
        </div>
    )
}
