import { useEffect, useState } from "react";
import Release from "../components/release";
import { Header } from "../components/header";
import SearchForm from "../components/searchForm";
import { Source_Code_Pro } from "@next/font/google";
import Spinner from "../components/spinner";
import ReleaseList from "../components/releaseList";

const martianMono = Source_Code_Pro({ subsets: ["latin"] });

export default function Home () {
    const [formData, setFormData] = useState({});
    const [releases, setReleases] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [pagination, setPagination] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const savedFormData = JSON.parse(sessionStorage.getItem('formData'));
        if (savedFormData) {
            setFormData(savedFormData);
        }
    }, []);

    useEffect(() => {
        if (searchQuery) {

            setLoading(true);
            setError(null);

            const fetchData = async () => {
                try {
                    const query = new URLSearchParams(searchQuery).toString();
                    const APIURL = `http://localhost:3001/search/?${query}`;
                    const response = await fetch(APIURL);
                    const searchResults = await response.json();
                    if (searchResults.error) {
                        setError(searchResults);
                        return;
                    }
                    setPagination(searchResults.pagination);
                    setReleases(searchResults.releases);
                } catch (e) {
                    setError(e);
                }
                setLoading(false);
            };
            fetchData();
        }
    }, [searchQuery]);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        if (Object.values(data).every(x => x === '')) {
            setError({ message: 'Please enter search parameters' });
            setFormData(data);
            return;
        }
        Object.keys(data).forEach((key) => data[key] === '' && delete data[key]);
        setFormData(data);
        setSearchQuery(data);
        sessionStorage.setItem('formData', JSON.stringify(data));
    };

    const mapReleasesToComponent = () => {
        return releases.map((release) => {
            return (
                <Release release={release} key={release.id}/>
            );
        });
    };

    let content;

    if (error !== null) {
        content = <p>{error.message}</p>;
    } else if (loading) {
        content = (
            <div className="text-center">
                <Spinner />
            </div>
        );
    } else {
        content = <ReleaseList releases={releases} pagination={pagination}
            setSearchQuery={setSearchQuery} searchQuery={searchQuery} />;
    }

    return (
        <>
            <header>
                <title>discogs-digger</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
            </header>

            <main className={martianMono.className + ' bg-neutral-800 text-white'}>
                <Header/>
                <SearchForm handleSubmit={handleFormSubmit} formData={formData}/>
                <div className="grid  gap-2  p-4">
                    {content}
                </div>
            </main>
        </>
    );
}
