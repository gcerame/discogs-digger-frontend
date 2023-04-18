import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import ReleaseVideos from "./releaseVideos";
import ReleaseInfo from "./releaseInfo";

export default function Release ({ release }) {

    return (
        <div className="bg-stone-400 text-gray-300 drop-shadow-2xl p-2 flex flex-col gap-5
        align-center justify-center p-2">
            <ReleaseInfo release={release}/>
            {release.videos ?

                <ReleaseVideos videos={release.videos} releaseTitle={release.title}/>
                :
                <p>There are no videos for this release.</p>
            }

        </div>
    );
}




