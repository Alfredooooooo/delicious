import Image from 'next/image';
import { motion } from 'framer-motion';

const Summary = ({ dishTypes, cuisines, summary, image, title }: any) => {
    console.log(cuisines);
    return (
        <motion.article
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
            <h3 className="text-center font-extrabold text-[1.25rem]">
                Cuisines
            </h3>
            <div className="flex justify-center items-center my-3 flex-wrap">
                {cuisines &&
                    cuisines.map((cuisine: any) => {
                        return (
                            <div
                                key={cuisine}
                                className="px-[1.5rem] py-[0.75rem] gradient-hamburger text-white rounded-[4rem] font-bold text-[0.75rem] my-2 mx-1 capitalize"
                            >
                                {cuisine}
                            </div>
                        );
                    })}
            </div>

            <h3 className="text-center font-extrabold text-[1.25rem] my-[1rem]">
                Dish Types
            </h3>
            <div className="flex justify-center items-center my-3 flex-wrap">
                {dishTypes &&
                    dishTypes.map((dishtype: any) => {
                        return (
                            <div
                                key={dishtype}
                                className="px-[1.5rem] py-[0.75rem] gradient-hamburger text-white rounded-[4rem] font-bold text-[0.75rem] my-2 mx-1 capitalize"
                            >
                                {dishtype}
                            </div>
                        );
                    })}
            </div>
            <h3 className="text-center font-extrabold text-[1.25rem] my-[1rem]">
                Image
            </h3>
            <div className="flex justify-center">
                {image && (
                    <Image
                        src={image}
                        width={450}
                        height={450}
                        className="object-cover"
                        alt={title}
                    />
                )}
            </div>
            <h3 className="text-center font-extrabold text-[1.25rem] mt-[2rem]">
                Summary
            </h3>
            {summary && (
                <div
                    dangerouslySetInnerHTML={{ __html: summary }}
                    className="my-2"
                ></div>
            )}
        </motion.article>
    );
};

export default Summary;
