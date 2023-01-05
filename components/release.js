import Image from "next/image";
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import ReleaseVideos from "./releaseVideos";
import Link from "next/link";

export default function Release ({ release }) {

    return (
        <div className="bg-stone-400 text-gray-300 border-2 border-black p-5 border-1 border-black flex flex-col gap-5
        align-center justify-center">
            <div className="flex place-content-around bg-stone-500 p-2 rounded w-4/5 self-center">
                <div className="flex flex-col">
                    <span className="italic text-xl">{release.title}</span>
                    <span className="text-lg">{release.artists[0].name}</span>
                    <p>Want: {release.want} Have: {release.have}</p>
                    <p>For sale: {release.forSale}</p>
                    <p>{release.year}</p>
                    <button className="p-1 bg-stone-800 active:translate-y-1 p-1">
                        <Link href={release.discogsURL}>discogs ↗</Link>
                    </button>



                </div>
                {release.image &&
                    <Image src={release.image} width="100" height="100" className=" h-auto max-w-sm"  alt="release cover"/>}
            </div>

            {release.videos ?

                <ReleaseVideos videos={release.videos} releaseTitle={release.title}/>
                :
                <p>There are no videos for this release.</p>
            }

        </div>
    );
}




