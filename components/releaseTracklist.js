export default function ReleaseTracklist ({ release }) {
    return (
        <div className="backdrop-blur-xl bg-neutral-500 items-center justify-center noise">
            {release.trackList?.map((track, index) => {
                return (
                    <p key={index} className="text-center p-2  capitalize max-w-xl text-neutral-100">
                        {track.position} {track.title}
                    </p>
                );
            })}
        </div>
    )
}