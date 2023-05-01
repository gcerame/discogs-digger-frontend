import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import ReleaseVideos from "./releaseVideos";
import ReleaseInfo from "./releaseInfo";
import { motion } from "framer-motion";

export default function Release ({ release }) {

    return (
        <motion.div
            className="bg-stone-400 text-gray-300 drop-shadow-2xl flex gap-5 p-2 justify-between"
            animate={{
                //Fade in animation
                opacity: [0, 1],
                //Animate from left to middle of page using framer motion
                x: [-1000, 0],

            }}
            transition={{ delay: 0.5 }}

        >
            <ReleaseInfo release={release}/>
            {release.videos ?

                <ReleaseVideos videos={release.videos} releaseTitle={release.title}/>
                :
                <p className="self-center">There are no videos for this release.</p>
            }

        </motion.div>
    );
}




