import Button from "./button";

export default function PageNavigation ({ handlePreviousPage, handleNextPage, pagination }) {


    return (
        <div className="navigation-menu flex flex-col self-center">
            {pagination.page && <span className="text-xl self-center">Page {pagination.page}/{pagination.pages}</span>}

            <div className="">
                <Button disabled={pagination.page === 1} onClick={handlePreviousPage} text="Previous"/>
                <Button disabled={pagination.page === pagination.pages} onClick={handleNextPage} text="Next">
                </Button>
            </div>
        </div>
    );
}