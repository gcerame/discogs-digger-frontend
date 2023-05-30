import React from 'react';
import { render, fireEvent, screen, } from '@testing-library/react';
import SearchForm from './SearchForm';
import '@testing-library/jest-dom';


describe('SearchForm', () => {
    it('renders all input fields', () => {
        render(<SearchForm setSearchQuery={() => {}} setError={() => {}} />);

        const inputs = screen.getAllByRole('textbox');
        expect(inputs.length).toBe(5);
    });

    it('triggers form submission and calls setSearchQuery with correct data', () => {
        const setSearchQueryMock = jest.fn();
        const setErrorMock = jest.fn();
        render(<SearchForm setSearchQuery={setSearchQueryMock} setError={setErrorMock} />);

        const searchButton = screen.getByText('Search');
        const form = screen.getByTitle('searchForm');


        fireEvent.click(searchButton);
        fireEvent.submit(form);

        expect(setErrorMock).toHaveBeenCalledWith({ message: 'Please enter search parameters' });
    });

    it('saves form data to session storage on submission', () => {

        const savedFormData2 = {
            style: 'Rock',
            year: '2020',
        }
        render(<SearchForm setSearchQuery={() => {}} setError={() => {}} />);
        const searchButton = screen.getByText('Search');
        const form = screen.getByTitle('searchForm');
        const styleInput = screen.getByPlaceholderText('Style');
        const yearInput = screen.getByPlaceholderText('Year');
        fireEvent.change(styleInput, { target: { value: savedFormData2.style } });
        fireEvent.change(yearInput, { target: { value: savedFormData2.year } });
        fireEvent.submit(form);
        const savedFormData = JSON.parse(sessionStorage.getItem('formData'));
        expect(savedFormData.style).toBe('Rock');
        expect(savedFormData.year).toBe('2020');
    });

    it('loads saved form data from session storage', () => {
        const savedFormData = {
            style: 'Rock',
            year: '2020',
            label: 'Example Records',
            country: 'USA',
            artist: 'John Doe',
        };
        sessionStorage.setItem('formData', JSON.stringify(savedFormData));

        render(<SearchForm setSearchQuery={() => {}} setError={() => {}} />);

        const styleInput = screen.getByLabelText('style');
        const yearInput = screen.getByLabelText('year');
        const labelInput = screen.getByLabelText('label');
        const countryInput = screen.getByLabelText('country');
        const artistInput = screen.getByLabelText('artist');

        expect(styleInput.value).toBe(savedFormData.style);
        expect(yearInput.value).toBe(savedFormData.year);
        expect(labelInput.value).toBe(savedFormData.label);
        expect(countryInput.value).toBe(savedFormData.country);
        expect(artistInput.value).toBe(savedFormData.artist);
    });

    it('updates form data state on input change', () => {
        render(<SearchForm setSearchQuery={() => {}} setError={() => {}} />);
        const styleInput = screen.getByLabelText('style');
        fireEvent.change(styleInput, { target: { value: 'Rock' } });
        expect(styleInput.value).toBe('Rock');
    });
});