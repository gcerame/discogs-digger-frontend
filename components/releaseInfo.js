import Link from "next/link";
import Image from "next/image";

export default function ReleaseInfo ({ release }) {
    return (
        <div className="flex place-content-around bg-stone-500 p-2 rounded w-full self-center">
            <div className="flex flex-col">
                <span className="italic text-xl">{release.title}</span>
                <span className="text-lg">{release.artists[0].name}</span>
                <p>Want: {release.want} Have: {release.have}</p>
                <p>For sale: {release.forSale}</p>
                <p>{release.year}</p>
                <button className=" bg-stone-800 active:translate-y-1 w-fit p-1">
                    <Link href={release.discogsURL}>discogs ↗</Link>
                </button>



            </div>
            {release.image &&
                <div className="aspect-square self-center"><Image src={release.image} width="100" height="100"
                    className="h-auto w-auto " alt="release cover"/></div>}
        </div>
    );
}