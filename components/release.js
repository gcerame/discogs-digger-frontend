import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import ReleaseVideos from "./releaseVideos";
import ReleaseInfo from "./releaseInfo";

export default function Release ({ release }) {

    return (
        <div className="bg-stone-400 text-gray-300 drop-shadow-2xl flex   gap-5
         p-2 justify-between">
            <ReleaseInfo release={release}/>
            {release.videos ?

                <ReleaseVideos videos={release.videos} releaseTitle={release.title}/>
                :
                <p className="self-center">There are no videos for this release.</p>
            }

        </div>
    );
}




