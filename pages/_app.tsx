import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
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

    return (
        <AnimatePresence mode="wait">
            <Component {...pageProps} key={findKey()} />
        </AnimatePresence>
    );
}
