export default function SearchForm ({ handleSubmit, formData }) {
    return (
        <div className="search-form p-6">
            <form onSubmit={handleSubmit}>
                <div className="flex flex-wrap justify-center align-center flex-col">
                    <input className="bg-gray-100 border-2 border-red" placeholder="Style"
                        id="style"
                        name="style"
                        aria-label="style"
                        defaultValue={formData.style || ''} />
                    <input className="bg-gray-100 border-2 border-red" placeholder="Year"
                        id="year"
                        name="year"
                        aria-label="year"
                        defaultValue={formData.year || ''} />
                    <input className="bg-gray-100 border-2 border-red" placeholder="Label"
                        id="label"
                        name="label"
                        aria-label="label"
                        defaultValue={formData.label || ''} />
                    <input className="bg-gray-100 border-2 border-red" placeholder="Country"
                        id="country"
                        name="country"
                        aria-label="country"
                        defaultValue={formData.country || ''} />
                    <input className="bg-gray-100 border-2 border-red" placeholder="Artist"
                        id="artist"
                        name="artist"
                        aria-label="artist"
                        defaultValue={formData.artist || ''} />
                    <input className="bg-gray-100 border-2 border-red" placeholder="Page"
                        id="page"
                        name="page"
                        aria-label="page"
                        defaultValue={formData.page || ''} />
                    <button className="bg-slate-500 drop-shadow-lg focus:ring hover:ring transition-all active:transform
          active:translate-y-1"
                    type="submit">Search</button></div>

            </form>
        </div>
    )
}
