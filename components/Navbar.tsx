import Link from 'next/link';
import Hamburger from './Hamburger';
import Search from './Search';
import { GiKnifeFork } from 'react-icons/gi';
import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        <motion.div
            initial={{
                y: 25,
                opacity: 0,
            }}
            animate={{
                y: 0,
                opacity: 1,
            }}
            transition={{
                duration: 0.75,
            }}
        >
            <Link href="/" className="flex items-center gap-1 py-16 px-0">
                <GiKnifeFork className="text-[2rem]" />
                <div className="text[1.5rem] logo">delicious</div>
            </Link>
            <Search />
            <Hamburger />
        </motion.div>
    );
};

export default Navbar;
