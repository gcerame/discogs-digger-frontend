import LiteYouTubeEmbed from "react-lite-youtube-embed";
import {StyledGridContainer} from "@nextui-org/react";

export default function ReleaseVideos ({videos,releaseTitle}) {

    return(
        <StyledGridContainer>
            {videos?.map((video) => {
                return (
                    <LiteYouTubeEmbed id={video.uri.split('v=').pop()}
                                      key={video.uri}
                                      title={releaseTitle}
                                      wrapperClass='yt-embed'
                    />
                );
            })}
        </StyledGridContainer>

    )
}
