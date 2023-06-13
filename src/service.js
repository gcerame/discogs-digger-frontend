export default async function fetchData (searchQuery, setError, setLoading, setPagination, setReleases) {
    try {
        let query = new URLSearchParams(searchQuery).toString();
        query += '&type=master';
        const APIURL = process.env.API_URL + `/search/?${query}`;
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
}