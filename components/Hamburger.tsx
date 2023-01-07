import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';

const Hamburger = () => {
    const router = useRouter();
    const classLink =
        'flex flex-col justify-center items-center rounded-[50%] gradient-hamburger w-[6rem] h-[6rem] cursor-pointer scale-[0.8]';

    return (
        <div className="flex justify-center items-center gap-5 my-4">
            <Link
                href="/cuisine/italian"
                className={
                    router.isReady && router.query.cuisineType == 'italian'
                        ? 'active ' + classLink
                        : classLink
                }
            >
                <FaPizzaSlice className="text-white text-[1.5rem]"></FaPizzaSlice>
                <h4 className="text-white text-[0.8rem] mt-[0.4rem] font-bold ham-font">
                    Italian
                </h4>
            </Link>
            <Link
                href="/cuisine/american"
                className={
                    router.isReady && router.query.cuisineType == 'american'
                        ? 'active ' + classLink
                        : classLink
                }
            >
                <FaHamburger className="text-white text-[1.5rem]"></FaHamburger>
                <h4 className="text-white text-[0.8rem] mt-[0.4rem] font-bold ham-font">
                    American
                </h4>
            </Link>
            <Link
                href="/cuisine/thai"
                className={
                    router.isReady && router.query.cuisineType == 'thai'
                        ? 'active ' + classLink
                        : classLink
                }
            >
                <GiNoodles className="text-white text-[1.5rem]"></GiNoodles>
                <h4 className="text-white text-[0.8rem] mt-[0.4rem] font-bold ham-font">
                    Thai
                </h4>
            </Link>
            <Link
                href="/cuisine/japanese"
                className={
                    router.isReady && router.query.cuisineType == 'japanese'
                        ? 'active ' + classLink
                        : classLink
                }
            >
                <GiChopsticks className="text-white text-[1.5rem]"></GiChopsticks>
                <h4 className="text-white text-[0.8rem] mt-[0.4rem] font-bold ham-font">
                    Japanese
                </h4>
            </Link>
        </div>
    );
};

export default Hamburger;
