import LiteYouTubeEmbed from "react-lite-youtube-embed";
import { Box, Button } from "@chakra-ui/react";
import React from "react";

export default function ReleaseVideos ({ videos, releaseTitle }) {
    const [currentVideo, setCurrentVideo] = React.useState(0);

    const handlePrevious = () => {
        setCurrentVideo((currentVideo - 1 + videos.length) % videos.length);
    };

    const handleNext = () => {
        setCurrentVideo((currentVideo + 1) % videos.length);
    };

    return (
        <div className="grid">
            {videos?.map((video, index) => {
                if (index !== currentVideo) return null;
                const videoID = video.uri.split('v=').pop();
                return (
                    <div className="bg-slate-800">
                        <LiteYouTubeEmbed wrapperClass="yt-lite"  playerClass="lty-playbtn" id={videoID} key={videoID} title={releaseTitle} />
                    </div>
                );
            })}
            Video {currentVideo + 1} of {videos.length}
            <button className="bg-slate-500 drop-shadow-lg focus:ring hover:ring transition-all active:transform
                    active:translate-y-1" onClick={handlePrevious}>Previous</button>
            <button className="bg-slate-500 drop-shadow-lg focus:ring hover:ring transition-all active:transform
                    active:translate-y-1" onClick={handleNext}>Next</button>
        </div>
    );
}
