import React from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

interface childrenProps {
    children: React.ReactNode;
}

const Layout = ({ children }: childrenProps) => {
    const router = useRouter();
    const findKey = () => {
        if (router.pathname != '/') {
            if (router.pathname == '/search/[searchResult]') {
                const search: String = router.query.searchResult as String;
                return search;
            } else if (router.pathname == '/cuisine/[cuisineType]') {
                const cuisineType: String = router.query.cuisineType as String;
                return cuisineType;
            } else if (router.pathname == '/recipe/[id]') {
                const recipeId: String = router.query.id as String;
                return recipeId;
            }
            return router.pathname;
        }
        return router.route;
    };
    console.log(findKey());
    return (
        <motion.div
            className="layout"
            initial="initialState"
            animate="animateState"
            exit="exitState"
            variants={{
                initialState: {
                    opacity: 0,
                    clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
                    transition: { duration: 0.4 },
                },
                animateState: {
                    opacity: 1,
                    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                    transition: { duration: 0.4, staggerChildren: 0.1 },
                },
                exitState: {
                    clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
                    transition: { duration: 0.4 },
                },
            }}
            key={findKey() as string}
        >
            <Navbar />
            <motion.div className="content">{children}</motion.div>
        </motion.div>
    );
};

export default Layout;
