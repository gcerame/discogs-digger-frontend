import Release from "./release";
import PageNavigation from "./pageNavigation";

export default function ReleaseList ({ releases, pagination, searchQuery, setSearchQuery }) {

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
    };

    const handleNextPage = () => {
        if (pagination.page < pagination.pages) {
            setSearchQuery({ ...searchQuery, page: pagination.page + 1 });
        }
    };

    return (
        <div className="flex flex-col">
            <PageNavigation handlePreviousPage={handlePreviousPage}
                handleNextPage={handleNextPage} pagination={pagination}/>
            {mapReleasesToComponent()}
            <PageNavigation handlePreviousPage={handlePreviousPage}
                handleNextPage={handleNextPage} pagination={pagination}/>
        </div>
    );
}