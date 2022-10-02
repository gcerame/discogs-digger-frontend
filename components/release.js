import Image from "next/image";
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import ReleaseVideos from "./releaseVideos";

export default function Release ({ release }) {

    return (
        <div className="release">
            <h2>{release.title}</h2>
            <p>{release.year}</p>
            {release.image && <Image src={release.image} width={50} height={50} objectFit="none" alt="release cover"/>}
           <ReleaseVideos videos={release.videos} releaseTitle={release.title}/>
        </div>
    );
}




