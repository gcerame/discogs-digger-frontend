import LiteYouTubeEmbed from "react-lite-youtube-embed";
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
        <div className="w-4/5 self-center p-2 ">
            {videos?.map((video, index) => {
                if (index !== currentVideo) return null;
                const videoID = video.uri.split('v=').pop();
                return (
                    <><p className="p-2 text-gray-700">{video.title}</p>
                        <LiteYouTubeEmbed wrapperClass="yt-lite" playerClass="lty-playbtn"
                            id={videoID} key={videoID} title={releaseTitle}/></>
                );
            })}
            <div className="grid grid-cols-auto align-center justify-center gap-2">
                <p className="col-span-2 self-center">Video {currentVideo + 1} of {videos.length}</p>
                <button className="bg-gradient-to-b from-stone-800 drop-shadow-lg focus:ring  transition-all active:transform
                    active:translate-y-1 p-1" onClick={handlePrevious}>
                    Previous
                </button>
                <button className="bg-stone-800 drop-shadow-lg focus:ring  transition-all active:transform
                    active:translate-y-1 p-1" onClick={handleNext}>
                    Next
                </button>
            </div>
        </div>
    );
}
