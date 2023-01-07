import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const getServerSideProps = async (context: any) => {
    const { query } = context;
    const { cuisineType } = query;
    console.log(cuisineType);

    const res = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.NEXT_PUBLIC_APP_API_KEY}&number=20&cuisine=${cuisineType}`
    );

    const data = await res.json();

    return {
        props: { recipes: data.results, cuisineType },
    };
};

const CuisineType = ({ recipes, cuisineType }: any) => {
    return (
        <>
            <Head>
                <title>Delicious - Cuisine</title>
            </Head>
            <motion.div
                className="grid-auto-fit"
                initial={{
                    y: 25,
                    opacity: 0,
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                }}
                exit={{
                    y: 25,
                    opacity: 0,
                }}
                transition={{
                    delay: 0.2,
                    duration: 0.75,
                }}
                key={cuisineType as string}
            >
                {recipes &&
                    recipes.map((recipe: any) => {
                        return (
                            <Link
                                key={recipe.id}
                                className=""
                                href={`/recipe/${recipe.id}`}
                            >
                                <Image
                                    className="w-full object-cover rounded-[2rem] shadow-2xl"
                                    src={recipe.image}
                                    alt={recipe.title}
                                    width={300}
                                    height={300}
                                ></Image>
                                <h3 className="absolute left-0 top-[42.5%] text-center w-full text-bold text-white invisible bg-black description">
                                    See more
                                </h3>
                                <h4 className="text-center p-4 font-bold">
                                    {recipe.title}
                                </h4>
                            </Link>
                        );
                    })}
            </motion.div>
        </>
    );
};

export default CuisineType;
