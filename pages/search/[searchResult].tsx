import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const getServerSideProps = async (context: any) => {
    const { query } = context;
    const { searchResult } = query;

    const res = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.NEXT_PUBLIC_APP_API_KEY}&number=20&query=${searchResult}`
    );

    const data = await res.json();

    return {
        props: {
            recipes: data.results,
            searchResult,
        },
    };
};

const SearchResult = ({ recipes, searchResult }: any) => {
    return (
        <>
            <Head>
                <title>Delicious - {searchResult}</title>
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
                transition={{
                    delay: 0.2,
                    duration: 0.75,
                }}
                key={searchResult as string}
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

export default SearchResult;
