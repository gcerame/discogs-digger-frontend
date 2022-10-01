import {Card, Text} from "@nextui-org/react";
import Image from "next/image";
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import ReleaseVideos from "./releaseVideos";

export default function Release ({ release }) {

    return (
        <Card variant="bordered">
            <Text h2>{release.title}</Text>
            <p>{release.year}</p>
            {release.image && <Image src={release.image} width={50} height={50} objectFit="none" alt="release cover"/>}
           <ReleaseVideos videos={release.videos} releaseTitle={release.title}/>
        </Card>
    );
}




