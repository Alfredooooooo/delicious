import { useState } from 'react';
import { MdIntegrationInstructions } from 'react-icons/md';
import { SlBookOpen } from 'react-icons/sl';
import { BiBook } from 'react-icons/bi';
import Summary from '../../components/Summary';
import Instruction from '../../components/Instruction';
import Ingredients from '../../components/Ingredients';
import Head from 'next/head';
import { motion } from 'framer-motion';

export const getServerSideProps = async (context: any) => {
    const { query } = context;
    const { id } = query;

    const res = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.NEXT_PUBLIC_APP_API_KEY}`
    );
    const data = await res.json();

    return {
        props: {
            recipe: data,
        },
    };
};

const RecipeDetail = ({ recipe }: any) => {
    const [activeTab, setActiveTab] = useState('summary');
    const buttonClassName =
        'px-8 py-4 rounded-xl flex items-center flex-col gap-[0.4rem] gradient-hamburger scale-[85%]';
    // console.log(recipe);
    return (
        <>
            <Head>
                <title>Delicious - {recipe.title}</title>
            </Head>
            <motion.div
                className="flex flex-col items-center my-8 shadow-xl border-zinc-900 border-opacity-[2%] border-[8px] p-12 rounded-[2rem]"
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
                key={recipe.id as string}
            >
                <h2 className="font-extrabold mt-8 text-[1.5rem]">
                    {recipe.title}
                </h2>
                <div className=" my-[1rem] justify-center flex gap-[0.5rem] flex-wrap">
                    <button
                        className={
                            activeTab === 'summary'
                                ? `active ${buttonClassName}`
                                : buttonClassName
                        }
                        onClick={() => setActiveTab('summary')}
                    >
                        <BiBook className="text-white" />
                        <h3 className="text-white font-bold">Summary</h3>
                    </button>
                    <button
                        className={
                            activeTab === 'instruction'
                                ? `active ${buttonClassName}`
                                : buttonClassName
                        }
                        onClick={() => setActiveTab('instruction')}
                    >
                        <MdIntegrationInstructions className="text-white" />
                        <h3 className="text-white font-bold">Instruction</h3>
                    </button>
                    <button
                        className={
                            activeTab === 'ingredients'
                                ? `active ${buttonClassName}`
                                : buttonClassName
                        }
                        onClick={() => setActiveTab('ingredients')}
                    >
                        <SlBookOpen className="text-white" />
                        <h3 className="text-white font-bold">Ingredients</h3>
                    </button>
                </div>
                {activeTab === 'summary' && (
                    <Summary
                        cuisines={recipe.cuisines}
                        dishTypes={recipe.dishTypes}
                        image={recipe.image}
                        summary={recipe.summary}
                        title={recipe.title}
                    />
                )}
                {activeTab === 'instruction' &&
                    recipe.analyzedInstructions[0] && (
                        <Instruction
                            instruction={recipe.analyzedInstructions[0].steps}
                        />
                    )}
                {activeTab === 'ingredients' && (
                    <Ingredients ingredients={recipe.extendedIngredients} />
                )}
            </motion.div>
        </>
    );
};

export default RecipeDetail;
