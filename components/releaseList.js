import Release from "./release";

export default function ReleaseList ({ releases, pagination, searchQuery, setSearchQuery }){

    const mapReleasesToComponent = () => {
        return releases.map((release) => {
            return (
                <Release release={release} key={release.id}/>
            );
        });
    };
    const handlePreviousPage = () => {
        if (pagination.page > 1) {
            //Use setSearchQuery to update the searchQuery state and change the page number
            setSearchQuery({ ...searchQuery, page: pagination.page - 1 });
        }
    }

    const handleNextPage = () => {
        if (pagination.page < pagination.pages) {
            setSearchQuery({ ...searchQuery, page: pagination.page + 1 });
        }
    }

    return(
        <div>
            <div className="navigation-menu">
                <button disabled={pagination.page === 1} onClick={handlePreviousPage}>Previous Page</button>
                <span>{pagination.page}/{pagination.pages}</span>
                <button disabled={pagination.page === pagination.pages} onClick={handleNextPage}>Next Page</button>
            </div>
            {mapReleasesToComponent()}
            <div className="navigation-menu">
                <button disabled={pagination.page === 1} onClick={handlePreviousPage}>Previous Page</button>
                <span>{pagination.page}/{pagination.pages}</span>
                <button disabled={pagination.page === pagination.pages} onClick={handleNextPage}>Next Page</button>
            </div>
        </div>
    );
}