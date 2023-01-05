export default function SearchForm ({ handleSubmit, formData }) {
    return (
        <div className="search-form p-6">
            <form onSubmit={handleSubmit}>
                <div className="flex flex-wrap justify-center align-center flex-col gap-1">
                    <input className="bg-neutral-600 p-1 border-2 border-black" placeholder="Style"
                        id="style"
                        name="style"
                        aria-label="style"
                        defaultValue={formData.style || ''} />
                    <input className="bg-neutral-600 p-1 border-2 border-black" placeholder="Year"
                        id="year"
                        name="year"
                        aria-label="year"
                        defaultValue={formData.year || ''} />
                    <input className="bg-neutral-600 p-1 border-2 border-black" placeholder="Label"
                        id="label"
                        name="label"
                        aria-label="label"
                        defaultValue={formData.label || ''} />
                    <input className="bg-neutral-600 p-1 border-2 border-black" placeholder="Country"
                        id="country"
                        name="country"
                        aria-label="country"
                        defaultValue={formData.country || ''} />
                    <input className="bg-neutral-600 p-1 border-2 border-black" placeholder="Artist"
                        id="artist"
                        name="artist"
                        aria-label="artist"
                        defaultValue={formData.artist || ''} />
                    <input className="bg-neutral-600 p-1 border-2 border-black" placeholder="Page"
                        id="page"
                        name="page"
                        aria-label="page"
                        defaultValue={formData.page || ''} />
                    <button className="bg-neutral-700 p-2 border-1 border-black drop-shadow-lg focus:ring hover:ring
                    transition-all active:transform active:translate-y-1"
                    type="submit">Search</button></div>

            </form>
        </div>
    )
}
