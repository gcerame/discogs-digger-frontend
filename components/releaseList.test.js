import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ReleaseList from './releaseList';

describe('ReleaseList', () => {
    const releases = [
        { id: 1, title: 'Release 1', artists: [{ name: 'Artist 1' }] , discogsUrl: 'https://www.discogs.com/release/1'},
        { id: 2, title: 'Release 2', artists: [{ name: 'Artist 2' }], discogsUrl: 'https://www.discogs.com/release/2' },
        { id: 3, title: 'Release 3' , artists: [{ name: 'Artist 3' }], discogsUrl: 'https://www.discogs.com/release/3'},
    ];

    const pagination = {
        page: 1,
        pages: 2,
    };

    const searchQuery = {};
    const setSearchQuery = jest.fn();

    it('renders releases correctly', () => {
        render(
            <ReleaseList
                releases={releases}
                pagination={pagination}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
        , );

        const releaseElements = screen.getAllByTestId('release');
        expect(releaseElements).toHaveLength(releases.length);
    });

    it('renders "No releases found." when releases are empty', () => {
        render(
            <ReleaseList
                releases={[]}
                pagination={pagination}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
        );

        expect(screen.getByText('No releases found.')).toBeInTheDocument();
    });

    it('calls setSearchQuery with the previous page when clicking the previous page button', () => {
        render(
            <ReleaseList
                releases={releases}
                pagination={pagination}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
        );

        const previousPageButton = screen.getByTestId('previous-page-button');
        fireEvent.click(previousPageButton);

        expect(setSearchQuery).toHaveBeenCalledWith({ ...searchQuery, page: pagination.page - 1 });
    });

    it('calls setSearchQuery with the next page when clicking the next page button', () => {
        render(
            <ReleaseList
                releases={releases}
                pagination={pagination}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
        );

        const nextPageButton = screen.getByTestId('next-page-button');
        fireEvent.click(nextPageButton);

        expect(setSearchQuery).toHaveBeenCalledWith({ ...searchQuery, page: pagination.page + 1 });
    });
});
