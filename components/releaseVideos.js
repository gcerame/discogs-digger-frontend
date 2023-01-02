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
        <Box>
            {videos?.map((video, index) => {
                if (index !== currentVideo) return null;
                const videoID = video.uri.split('v=').pop();
                return (
                    <Box padding={2} w="100%">
                        <LiteYouTubeEmbed wrapperClass="yt-lite"  playerClass="lty-playbtn" id={videoID} key={videoID} title={releaseTitle} />
                    </Box>
                );
            })}
            Video {currentVideo + 1} of {videos.length}
            <Button onClick={handlePrevious}>Previous</Button>
            <Button onClick={handleNext}>Next</Button>
        </Box>
    );
}
