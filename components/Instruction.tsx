import { motion } from 'framer-motion';

const Instruction = ({ instruction }: any) => {
    console.log(instruction);
    return (
        <motion.div
            className="text-center text-[1.25rem]"
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
                clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
                transition: { duration: 0.4 },
            }}
        >
            {instruction &&
                instruction.map((step: any) => {
                    return (
                        <div
                            key={step.number}
                        >{`${step.number}. ${step.step}`}</div>
                    );
                })}
        </motion.div>
    );
};

export default Instruction;
