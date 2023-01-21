export default function PageNavigation ({ handlePreviousPage, handleNextPage, pagination }) {
    const buttonClassName = "bg-neutral-700 p-3 m-2 border-1 border-black drop-shadow-lg focus:ring hover:ring" +
        " transition-all active:transform active:translate-y-1 w-fit self-center";

    return (
        <div className="navigation-menu flex flex-col self-center">
            {pagination.page && <span className="text-xl self-center">Page {pagination.page}/{pagination.pages}</span>}

            <div className="">
                <button disabled={pagination.page === 1} onClick={handlePreviousPage}
                    className={buttonClassName}>Previous
                </button>
                <button disabled={pagination.page === pagination.pages} onClick={handleNextPage}
                    className={buttonClassName}>Next
                </button>
            </div>
        </div>
    );
}