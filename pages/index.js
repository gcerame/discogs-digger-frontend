import Head from 'next/head';
import {useState} from "react";
import Release from "../components/release";

function Header () {
    return (
        <header>
            <title>discogs-digger</title>
            <meta name="description" content="Generated by create next app"/>
        </header>
    );
}

export default function Home () {
    const [releases, setReleases] = useState([]);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        Object.keys(data).forEach((key) => data[key] === '' && delete data[key]);
        const searchQuery = new URLSearchParams(data).toString();

        try {
            const APIURL = `http://localhost:3001/search/?${searchQuery}`;
            console.log(APIURL);
            const response = await fetch(APIURL);
            const fetchedReleases = await response.json();
            console.log(fetchedReleases);
            setReleases(fetchedReleases);

        } catch (e) {
            setError(e);
            console.log(e);
        }
    };

    const mapReleasesToComponent = () => {
        return releases.map((release) => {
            return (
                <Release release={release} key={release.id}/>
            );
        });
    };

    return (
        <>
            <Header/>

            <main>
                <h1>
                    Welcome to <span>discogs-digger</span>
                </h1>
                <div className="search-form">
                    <form onSubmit={handleSubmit}>
                        <div className="form--inputs">

                            <input className="form--input" placeholder="Style" id="style" name="style"
                                   aria-label="style"></input>
                            <input className="form--input" placeholder="Year" id="year" name="year"
                                   aria-label="year"></input>
                            <input className="form--input" placeholder="Label" id="label" name="label"
                                   aria-label="label"></input>
                            <input className="form--input" placeholder="Country" id="country" name="country"
                                   aria-label="country"></input>
                            <input className="form--input" placeholder="Artist" id="artist" name="artist"
                                   aria-label="artist"></input>
                            <button type="submit">Search</button>
                        </div>

                    </form>
                </div>
                <div className="releases--container">
                    {mapReleasesToComponent()}
                </div>
            </main>
        </>);
}
