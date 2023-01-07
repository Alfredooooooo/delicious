import { Splide, SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { LOOP } from '@splidejs/splide';
import Link from 'next/link';
import { motion } from 'framer-motion';

// export const getStaticProps = async () => {};

const Veggie = ({ veggie }: any) => {
    // const [veggie, setVeggie] = useState([]);

    // useEffect(() => {
    //     getAPI();
    // }, []);

    // const getAPI = async () => {
    //     console.log(process.env.NEXT_PUBLIC_APP_API_KEY);
    //     const res = await fetch(
    //         `https://api.spoonacular.com/recipes/random?apiKey=${process.env.NEXT_PUBLIC_APP_API_KEY}&number=9&tags=vegetarian`
    //     );

    //     const data = await res.json();

    //     setVeggie(data.recipes);
    // };

    return (
        <motion.div
            initial={{
                x: -100,
                y: 150,
                opacity: 0,
            }}
            animate={{
                x: 0,
                y: 0,
                opacity: 1,
            }}
        >
            <div className="my-16">
                <h3 className="my-8 text-2xl leading-10 text-[#383838]">
                    Our Vegetarian Picks
                </h3>
                <Splide
                    options={{
                        type: LOOP,
                        perPage: 3,
                        arrows: false,
                        pagination: false,
                        drag: 'free',
                        gap: '5rem',
                    }}
                >
                    {veggie &&
                        veggie.map((recipe: any) => {
                            return (
                                <SplideSlide key={recipe.id}>
                                    <Link
                                        href={`/recipe/${recipe.id}`}
                                        className="cursor-pointer"
                                    >
                                        <div className="h-[25rem] rounded-[2rem] overflow-hidden relative transition delay-700 duration-300 ease-in-out">
                                            <Image
                                                src={recipe.image}
                                                alt={recipe.title}
                                                fill
                                                className="rounded-[2rem] absolute left-0 w-full h-full object-cover"
                                            ></Image>
                                            <p className="absolute z-10 left-1/2 bottom-0 text-white font-semibold -translate-x-1/2 -translate-y-0 w-[90%] h-[25%] text-center flex items-center justify-center overflow-y-hidden">
                                                {recipe.title}
                                            </p>
                                            <div className="absolute z-[9] w-full h-full bg-gradient-to-b from-transparent to-[#1e1d1db5] hover:bg-gradient-to-b hover:from-transparent hover:to-black"></div>
                                        </div>
                                    </Link>
                                </SplideSlide>
                            );
                        })}
                </Splide>
            </div>
        </motion.div>
    );
};

export default Veggie;
