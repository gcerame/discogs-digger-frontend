import Release from "./release";
import PageNavigation from "./pageNavigation";

export default function ReleaseList ({ releases, pagination, searchQuery, setSearchQuery }) {

    const mapReleasesToComponent = () => {
        if (!releases || releases.length === 0) return <p>No releases found.</p>;
        return releases.map((release) => {
            return (
                <Release release={release} key={release.id}/>
            );
        });
    };
    const handlePreviousPage = () => {
        if (pagination.page > 1) {
            setSearchQuery({ ...searchQuery, page: pagination.page - 1 });
        }
    };

    const handleNextPage = () => {
        if (pagination.page < pagination.pages) {
            setSearchQuery({ ...searchQuery, page: pagination.page + 1 });
        }
    };

    return (
        <div className="flex flex-col p-2 gap-2">
            <PageNavigation handlePreviousPage={handlePreviousPage}
                handleNextPage={handleNextPage} pagination={pagination}/>
            {mapReleasesToComponent()}
            <PageNavigation handlePreviousPage={handlePreviousPage}
                handleNextPage={handleNextPage} pagination={pagination}/>
        </div>
    );
}