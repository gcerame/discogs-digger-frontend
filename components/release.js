import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import ReleaseVideos from "./releaseVideos";
import ReleaseInfo from "./releaseInfo";
import { motion } from "framer-motion";

export default function Release ({ release }) {
    return (
        <motion.div
            className="bg-stone-400 text-gray-300 drop-shadow-2xl flex gap-5 p-2 justify-between noise flex-wrap
            items-center md:flex-nowrap"
            animate={{
                opacity: [0, 1],
            }}
        >
            <ReleaseInfo release={release}/>
            {release.videos ?
                <ReleaseVideos videos={release.videos} release={release} />
                :
                <p className="self-center mx-auto italic text-neutral-800 text-lg w-full text-center m-1">
                    There are no videos for this release.
                </p>
            }

        </motion.div>
    );
}




