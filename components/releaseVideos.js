import LiteYouTubeEmbed from "react-lite-youtube-embed";

export default function ReleaseVideos ({videos,releaseTitle}) {

    return(
        <div className="release--videos">
            {videos?.map((video) => {
                return (
                    <LiteYouTubeEmbed id={video.uri.split('v=').pop()}
                                      key={video.uri}
                                      title={releaseTitle}
                                      wrapperClass="yt-embed"
                                      activatedClass="yt-embed"
                    />
                );
            })}
        </div>

    )
}
