import { useRouter } from 'next/router';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const Search = () => {
    const router = useRouter();
    const [search, setSearch] = useState('Muffin');

    return (
        <form
            className="mx-[10rem] p-4"
            onSubmit={(e) => {
                e.preventDefault();
                console.log(search);
                router.push(`/search/${search}`);
            }}
        >
            <div className="w-full relative">
                <FaSearch className="text-white absolute top-1/2 left-0 translate-x-full -translate-y-1/2" />
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border-none gradient-hamburger text-[1.5rem] text-white py-[0.8rem] px-[3rem] w-full rounded-2xl outline-none search"
                />
            </div>
        </form>
    );
};

export default Search;
