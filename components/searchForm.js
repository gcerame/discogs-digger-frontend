import React from 'react';

export default function SearchForm ({ handleSubmit, formData }) {
    const inputs = [
        { placeholder: 'Style', id: 'style', name: 'style', ariaLabel: 'style' },
        { placeholder: 'Year', id: 'year', name: 'year', ariaLabel: 'year' },
        { placeholder: 'Label', id: 'label', name: 'label', ariaLabel: 'label' },
        { placeholder: 'Country', id: 'country', name: 'country', ariaLabel: 'country' },
        { placeholder: 'Artist', id: 'artist', name: 'artist', ariaLabel: 'artist' },
        { placeholder: 'Page', id: 'page', name: 'page', ariaLabel: 'page' },
    ];

    return (
        <div className="search-form p-6">
            <form onSubmit={handleSubmit}>
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
                    <button
                        className="bg-neutral-700 p-3 m-2 border-1 border-black drop-shadow-lg focus:ring hover:ring
                         transition-all active:transform active:translate-y-1 w-fit self-center"
                        type="submit"
                    >
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
}
