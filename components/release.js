import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import ReleaseVideos from "./releaseVideos";
import ReleaseInfo from "./releaseInfo";

export default function Release ({ release }) {

    return (
        <div className="bg-stone-400 text-gray-300 border-2 border-black p-2 border-1 border-black flex flex-col gap-5
        align-center justify-center">
            <ReleaseInfo release={release}/>
            {release.videos ?

                <ReleaseVideos videos={release.videos} releaseTitle={release.title}/>
                :
                <p>There are no videos for this release.</p>
            }

        </div>
    );
}




