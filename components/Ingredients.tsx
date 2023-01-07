import { motion } from 'framer-motion';

const Ingredients = ({ ingredients }: any) => {
    return (
        <motion.div
            className="my-2"
            initial={{
                opacity: 0,
                clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
            }}
            animate={{
                opacity: 1,
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                transition: { duration: 0.4, staggerChildren: 0.1 },
            }}
            exit={{
                clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
                transition: { duration: 0.4 },
            }}
        >
            {ingredients &&
                ingredients.map((ingredient: any) => {
                    return (
                        <div
                            key={ingredient.id}
                            className="text-[1.5rem] capitalize"
                        >
                            {ingredient.original}
                        </div>
                    );
                })}
        </motion.div>
    );
};

export default Ingredients;
