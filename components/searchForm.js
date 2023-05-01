import React, { useEffect, useState } from 'react';
import Button from "./button";

export default function SearchForm ({ setSearchQuery, setError }) {
    const [formData, setFormData] = useState({});

    useEffect(() => {
        const savedFormData = JSON.parse(sessionStorage.getItem('formData'));
        if (savedFormData) {
            setFormData(savedFormData);
        }
    }, []);

    const inputs = [
        { placeholder: 'Style', id: 'style', name: 'style', ariaLabel: 'style' },
        { placeholder: 'Year', id: 'year', name: 'year', ariaLabel: 'year' },
        { placeholder: 'Label', id: 'label', name: 'label', ariaLabel: 'label' },
        { placeholder: 'Country', id: 'country', name: 'country', ariaLabel: 'country' },
        { placeholder: 'Artist', id: 'artist', name: 'artist', ariaLabel: 'artist' },
    ];

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


    return (
        <div className="search-form p-6">
            <form onSubmit={handleFormSubmit}>
                <div className="flex flex-wrap justify-center align-center flex-col gap-1">
                    {inputs.map(input => (
                        <input
                            className="bg-neutral-600 p-2 border-2 border-black"
                            placeholder={input.placeholder}
                            id={input.id}
                            name={input.name}
                            aria-label={input.ariaLabel}
                            defaultValue={formData[input.name] || ''}
                            key={input.name}
                        />
                    ))}
                    <Button type="submit" text="Search" />
                </div>
            </form>
        </div>
    );
}
