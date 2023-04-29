export default function Button ({ text, onClick,type, disabled }) {
    return (
        <button
            className="bg-neutral-700 p-3 m-2 border-1 border-black drop-shadow-lg focus:ring hover:ring
                         transition-all active:transform active:translate-y-1 w-fit self-center "
            type={type ? type : null}
            onClick={onClick}
            aria-label={text}
            disabled={disabled}
        >
            {text}
        </button>
    );
}