import LiteYouTubeEmbed from "react-lite-youtube-embed";
import React from "react";
import Button from "./button";

export default function ReleaseVideos ({ videos, releaseTitle }) {
    const [currentVideo, setCurrentVideo] = React.useState(0);

    const handlePrevious = () => {
        setCurrentVideo((currentVideo - 1 + videos.length) % videos.length);
    };

    const handleNext = () => {
        setCurrentVideo((currentVideo + 1) % videos.length);
    };

    return (
        <div className=" flex-col flex-wrap grow self-center m-auto">
            {videos?.map((video, index) => {
                if (index !== currentVideo) return null;
                const videoID = video.uri.split('v=').pop();
                return (
                    <div className="text-center p-2" key={videoID}>
                        <p className=" text-gray-700  mx-auto p-2 text-xl capitalize">
                            {video.title.toUpperCase()}
                        </p>
                        <div className="aspect-video drop-shadow-lg max-w-sm mx-auto" >
                            <LiteYouTubeEmbed
                                playerClass="lty-playbtn" id={videoID} key={videoID} title={releaseTitle}/>
                        </div>
                    </div>

                );
            })}
            <div className="grid grid-cols-auto align-center justify-center gap-2">
                <p className="col-span-2 self-center p-2 italic">Video {currentVideo + 1} of {videos.length}</p>
                <Button text="Previous" onClick={handlePrevious}></Button>
                <Button text="Next" onClick={handleNext}></Button>
            </div>
        </div>
    );
}
